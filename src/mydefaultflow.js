import React, { useState, useRef,useEffect } from 'react';
import './DesignFlow.css'
import {Form,Container,Row,Col,Button,Modal,InputGroup,FormControl,Dropdown, DropdownButton,Accordion} from 'react-bootstrap'

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  getEdgeCenter,
  isEdge,
  getMarkerEnd,
  getSmoothStepPath,
  Handle,
  MiniMap,
} from 'react-flow-renderer';

//reactflow work
const foreignObjectSize = 100;
const initialElements = [
    {
      id: '0',
      type: 'input',
      data: { label: 'Start' },
      position: { x: 250, y: 15 },
    },
    {
      id: '-1',
      type: 'output',
      data: { label: 'End'  },
      position: { x: 250, y: 450 },
    }
  ];
  
let id = 0;
let deletecount=0;
const getId = () => `dndnode_${id++}`;
const tempUpdatedId = () =>id++ ;
export default function DesignFlow() {

  //question data states
  const question=useRef([{node_id:'',question_id:'',stem:'',option:[{id:'',optionText:'',optionWeightage:''}],category:'',userName:''}]);
  const dropdownValues=useRef([{option:[{id:'',optionText:'',optionWeightage:''}]}]);
  //const [question,setQuestion]=useState([{question_id:'',stem:'',option:[{id:'',optionText:'',optionWeightage:''}]}]);
  const edgeData=useRef([{edge_id:'',source:'',target:'',selectedValue:'',userName:''}]);
  const [nodeFound,setnodeFound]=useState({node_id:'',question_id:'',stem:'',option:[{id:'',optionText:'',optionWeightage:''}],category:'',userName:''});
  const [stem,setStem]=useState();
  
  const [deleteButtonIds,setDeleteButtonIds]=useState([{id:''}]);
    const [optionList,setoptionList]=useState([{id:count,optionText: '',optionWeightage: ''}]);
  //const [updateQuestion,setUpdatedQuestion]=useState({node_id:'',question_id:'',stem:'',option:[{id:'',optionText:'',optionWeightage:''}],category:'',userName:''});
  edgeData.current=edgeData.current.filter(edge=>(!(edge.edge_id=='')));
  question.current=question.current.filter(node=>(!(node.node_id=='')));
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 const dropDownTitle=useRef("A");
 const titleArray=useRef([{id:0,selectedTitle:""}]);
    var count=1;
    const handleOptionChange = (name,val, index) => 
    {
      const list = [...optionList];
      list[index][name] = val;
      setoptionList(list);
    };
    const handleStemChange=(e)=>{
      setStem(e.target.value);
     }
     const handleRemoveClick = index => 
    {
      const list = [...optionList];
      list.splice(index, 1);
      setoptionList(list);
    };

  // handle click event of the Add button
    const handleAddClick = (id) => 
    {
    count=Math.ceil(Math.random()*99999999);
    //id=count;
    setoptionList([...optionList, {id:count, optionText: '', optionWeightage: '' }]);
    };
  //reactflow states
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
 //data functions
  useEffect(()=>{
   console.log(nodeFound);
   setoptionList(nodeFound.option);
   setStem(nodeFound.stem);
    },[nodeFound]);
  const findNode=(nodeid)=>
  {
    
  //console.log("Find node question called elements:",elements);
    console.log("Find node question called:",question);
    console.log("data id is ",nodeid);
    question.current.map((node)=>
    {
      console.log(" Current Question id",node.node_id);
      if(node.node_id===nodeid)
      {
        //node update and posting request here

        console.log("FIND NODE CALLED(Node_id)",node.node_id,"(question ID):",node.question_id," question stem: ",node.stem,
       "options: ",node.option," Category: ",node.category,"username: ",node.userName);
       setnodeFound(node);
       
       console.log("Question node is",node);
       console.log("updated node value",nodeFound);
       handleShow();
      }
      else
      {
        console.log("FIND node called error while finding node");
      }
    });
};
  const handleSubmitUpdateQuestion=()=>
  {
  nodeFound.stem=stem;
  nodeFound.option=optionList;
  nodeFound.userName="Hammad";
  console.log("nodefound in handlesubmit is",nodeFound);
  //send it to backend ,using temp new id
  //update question in array
  updateQuestion();
  updateNode();
  //change label
  //update question in edges options and ids
  let res=edgeData.current.every((edge)=>
  {
    if(edge.source===nodeFound.node_id)
    {
      return false;
    }
  });
  if(res===false)
  { 
    console.log("updated node calling");
    updateEdge();
  }
  else
  {
    console.log("updated question did not had any edges");
  }

  }
  const updateQuestion=()=>
  {
    question.current.map((node)=>
    {
      if(node.node_id===nodeFound.node_id)
      {
        node=nodeFound;
        console.log("question updated");
      }
    });
  }
  const updateEdge=()=>{
    console.log("edges before updation are")
    //edge and node data is change in elements and edge data
    edgeData.current=edgeData.current.filter(edge=>(!(nodeFound.node_id==edge.source)));
    console.log(" My updated edges are",edgeData.current);
    //     edgeData.current.map((edge)=>{
// if(edge.source===nodeFound.node_id)
// {

// }
//     });
  }
  const updateNode=()=>{
    
   
    // because of question useref question label 
    console.log("elements before updation are",elements);
    const nodeArray = [];
    elements.map((els) => 
    {
      if (!(isEdge(els))) 
      {
        if(els.id===nodeFound.node_id)
        {
          els.data.label=nodeFound.stem;
          console.log("updated els is ",els);
        }
        else{}
        return nodeArray.push(els);
      }
      else 
      {
        
      }
    });
    console.log("all updates els in nodearray are",nodeArray);
    //updateing node data

  }
  const setCurrentOption=(sourceid)=>
  {
    question.current.map((currentNode)=>
    {
      console.log("node id",currentNode.node_id,"current id:",currentNode.question_id,"Source id:",sourceid);
      if(currentNode.node_id===sourceid)
      {
        dropdownValues.current=currentNode.option;
       
        // dropdownValues.current.shift();
        console.log("Dropdown values: ",dropdownValues);
      }
      else
      {
        console.log("A setcurrent setting dp value iteration passsed");
      }
    });
  }
  const setEdgeData=(id,target,source,selectedOption)=>{
    let existingOption=false;
    titleArray.current.map((titleNode)=>{
      if(titleNode.id==source)
      {
existingOption=true;
titleNode.selectedTitle=selectedOption;
      }
    });
    if(existingOption==false){titleArray.current.push({id:source,selectedTitle:selectedOption})}else{}
   // console.log("dropdown title value setted is ",dropDownTitle.current);
    const tempEdge={edge_id:'',source:'',target:'',selectedValue:'',userName:''};
    question.current.map((node)=>{
      if(node.node_id===source)
      {
        console.log("node id ",node.node_id,"questionID",node.question_id," source",source ,"node username ",node.userName);
        tempEdge.userName=node.userName;
      }
    });
    tempEdge.edge_id=id;
    tempEdge.source=source;
    tempEdge.target=target;
    tempEdge.selectedValue=selectedOption;
    
    
    let isExisting=false;
    
    edgeData.current.map((edge)=>
    {
      if(edge.edge_id===id)
      {
        isExisting=true;
        edge.selectedValue=selectedOption;
      }
    })
    if(isExisting===false)
    {
      edgeData.current.push(tempEdge);
    }
    else
    {
      console.log("item value changed");
    }
      console.log("edge parameters: id:",id," source id: ",source," target :",target,"selected Option: ",selectedOption);

  }
  const removeQuestion=((questionid)=>
  {
    question.current=question.current.filter(currentQuestion=>(!(currentQuestion.node_id==questionid)));
  });
 //react flow functions
  const onConnect = (params) => setElements((els) => addEdge({ ...params,arrowHeadType:"arrow" }, els));
  const onElementsRemove = (elementsToRemove) =>
  {
    let isStartEnd=false;
    try{
      elementsToRemove.map((currentElement)=>{
      if(currentElement.id==='0')
      {
        isStartEnd=true;
        alert("Start node cannot be deleted");
      }
      else if(currentElement.id==='-1')
      {
        isStartEnd=true;
        alert("End node cannot be deleted");
      }
    });
    if(isStartEnd==false)
    {
      elementsToRemove.map((currentElement)=>
      {
       removeQuestion(currentElement.id);
      });
      console.log("elementsromvearray: ",question.current);
      setElements((els) => removeElements(elementsToRemove, els));
    }
  }catch(error){
console.log("error is ",error);
  }
  }
  const checkEdges=(allElements)=>{
    const edgeArray = [];
    const nodeArray = [];
    allElements.map((els) => 
    {
      if (isEdge(els)) 
      {
        return edgeArray.push(els);
      }
      else 
      {
        return nodeArray.push(els);
      }
    });
    console.log("node array lentgh",nodeArray.length,"Edges array lentgh:",edgeArray.length);
   let res=nodeArray.every((node)=>
   {
    let hasSource=false,hasTarget=false;
    edgeArray.map((edge)=>
    {
      
      console.log("node id",node.id,"Source",edge.source,"target",edge.target);
      if(!(node.id==-1))
      {
        if(node.id==edge.source)
        {
          hasSource=true;
        }
      }
      else
      {
        hasSource=true;
      }
     if(!(node.id==0))
     {
      if(node.id==edge.target)
      {
        hasTarget=true;
      }
    }
    else
    {
      hasTarget=true;
    }
   
     
    });
    
    if(hasSource==false || hasTarget==false) 
    {
      return false;
    }
    else{
      //if all nodes have edges 
     // question.current.shift();
      //edgeData.current.shift();
   
      return true;
    }
    
  });
  if(res===false)
  {
    alert("All questions must have edges");
  }
  if(res===true)
  {
    console.log("edge array: ",edgeArray.length,"edgedataarray:",edgeData.current.length);
    if((edgeArray.length)==edgeData.current.length)
    {
      console.log("All eddges have options selected");
      convertEdgesId();
    }
    else
    {
      alert("not All eddges have options selected");
      
    }
  }
}
const convertEdgesId=()=>{
  question.current.map((node)=>{
    edgeData.current.map((edge)=>{
      if(edge.source===node.node_id)
      {
        edge.source=node.question_id;
      }
      else if(edge.target===node.node_id)
      {
        edge.target=node.question_id;
      }
    });
  });
}
  const addStartEdge=()=>{//function functionality already handled in else dropdown case
    const tempEdge={edge_id:'',source:'',target:'',selectedValue:'',userName:''};
    const edgeArray = [];
    elements.map((els) => 
    {
      if (isEdge(els)) 
      {
        return edgeArray.push(els);
      }
      else 
      {}
    });
    edgeArray.map((edge)=>{
      if(edge.source===0)
      {
        tempEdge.edge_id=edge.id;
        tempEdge.target=edge.target;
      }
    });
    edgeData.current.push(tempEdge);
  }
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const onNodeDoubleClick=(event,node)=>{
    event.preventDefault();
    findNode(node.id);
  }
  const customNodeDelete=(datas)=>{
    // console.log("question before delete: ",question.current);
    //    removeQuestion(datas.id);
      
    //   console.log("question after delete: ",question.current);
      console.log("elemnts before deletion are:",elements)
      setElements((els) => removeElements([datas], els));
      console.log("elemnts after deletion are:",elements)
  }
  const ShowDeleteButton=(e,targetButtonId)=>{
   
    var x = document.getElementById(targetButtonId);
   
  if(e.button==2)
  {
    x.style.display = "block";
  }
  if(e.button==0)
  {
    //e.preventDefault();
    x.style.display = "none";
  }
    //   if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }

  const CustomNode = ({data}) => {
    return (
    <div 
    onNodeDoubleClick={(e)=>{ findNode(data.id) }} 
    onMouseDown={(e)=>{ShowDeleteButton(e,`${data.id}.deletebutton`)}}
    onContextMenu={(e)=> e.preventDefault()}
    >
   
    <Handle
      className='react-flow__handle react-flow__handle-top'
      type="target"
      position="top"
      id={`${data.id}.top`}
      // style={{ borderRadius: 30 }}
    />
    <Handle
      className='react-flow__handle react-flow__handle-bottom'
      type="source"
      position="bottom"
      id={`${data.id}.bottom`}
      //style={{ borderRadius: 30,width:"5px",height:"5px" }}
    //  style={{ top: "30%", borderRadius: 0 }}
    />
    <div> {data.label}</div> 
      <button    
      id={`${data.id}.deletebutton`}
     className="updateButtonStyle"
      onContextMenu={()=>{ onElementsRemove([data]) }}
    // onClick={()=>{onElementsRemove([data])}}
      // style={{
      // borderRadius:"20px",
      // width:"20px",
      // height:"20px",
      // position:"absolute",
      // top:" 50%",
      // left: "-10px",
      // transform: "translate(0, -50%)",
      // background:"transparent"
      // }}
      >
        X
        </button>
    
       
    </div>
    );
  };
  const setForeignVisible=(pathId)=>{
    console.log("i called");
const allobjects=document.getElementsByTagName("foreignObject");
for(let i=0 ; i < allobjects.length ; i++){
  allobjects[i].style.visibility="hidden";
}
const myfo = document.getElementById(`${pathId}.foreignObject`).style.visibility="visible";
//console.log("allobjects is:",allobjects.length);
 alert(myfo);
  }
  const customEdge=({
    id,
    source,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style,
    target,
    arrowHeadType,
    markerEndId,
  })=>
  {
    const edgePath = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });
    const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
    const [edgeCenterX, edgeCenterY] = getEdgeCenter({
      sourceX,
      sourceY,
      targetX,
      targetY,
    });
    return (
      <>
        <path
          id={id}
          
          className="react-flow__edge-path "
          /* changing the z-index to 8 shows dp over node in browser but
          same class in css that i write does not work case of default overriding    visibility= "hidden"*/
          d={edgePath}
          markerEnd={markerEnd}
          onClick={(e)=>{setForeignVisible(id)}}
        >ha</path>
        <foreignObject
       id={`${id}.foreignObject`}
       visibility= "hidden"
          width={foreignObjectSize+150}
          height={foreignObjectSize+100}
          x={edgeCenterX - foreignObjectSize / 4}
          y={edgeCenterY - foreignObjectSize / 4}
          className="edgebutton-foreignobject " 
          requiredExtensions="http://www.w3.org/1999/xhtml"
          onClick={(e)=>{console.log("my fo id is:",document.getElementsByTagName("foreignObject"))}}
        >
          <body className="pathdropdown">
   
            {question.current.map((node)=>{
              return(
                <div >{titleArray.current.map((Atitle)=>{
                  if(Atitle.id==source)
                  {dropDownTitle.current=Atitle.selectedTitle;}else{dropDownTitle.current=""}
                })}
              {((source===node.node_id))?(
              // console.log("My options are ",node.option)
              (!(node.option.length==0))?(
                <div className='dpdown'>
               
                <DropdownButton 
         id='dropdown-button-drop-end' drop='end'  title={dropDownTitle.current}  name="tempvalue"
                  onClick={setCurrentOption(source)} onSelect={(e)=>{setEdgeData(id,target,source,e)}} >
                 
                 
                  {dropdownValues.current.map((optionvalue,idx)=>{
                    return(
                      <div className='dropdownmenu'>
                    <Dropdown.Item  key={optionvalue.id} selected eventKey={optionvalue.optionText}>{optionvalue.optionText}</Dropdown.Item>
                    </div>); 
                  })}
                </DropdownButton>
                </div>
                  
              ):(setEdgeData(id,target,source,""))
               ):( (source==='0')?(
                 setEdgeData(id,target,source,"")):(console.log("neither source neither lentgh 0")) 
                 )}
               </div>
              ) })
            
            }
                
          </body>
        </foreignObject>
      </>
    );
  }

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    //const type = event.dataTransfer.getData('application/reactflow');
    const tempQuestionId=event.dataTransfer.getData('questionid');
    const tempQuestionStem=event.dataTransfer.getData('questionstem');
    const tempOptionsArray=(JSON.parse(event.dataTransfer.getData('currentoptions')));
    const tempCategory=event.dataTransfer.getData('category');
    const tempUsername=event.dataTransfer.getData('username');
    //console.log("Ondragstop called(question ID):",tempQuestionId," question stem: ",tempQuestionStem,
    //"thisCurrentoptions: ",tempOptionsArray);
    const list={};      
    list['question_id']=tempQuestionId;
    list['stem']=tempQuestionStem;
    list['option']=tempOptionsArray;
    list['category']=tempCategory;
    list['userName']=tempUsername;
    console.log("list is after",list);
    let isExisting=false;
    elements.map((currentQuestion)=>
    {
      console.log("Current question is ",currentQuestion.id,"tempques id,",tempQuestionId);
      if(currentQuestion.id==tempQuestionId)
      {
        isExisting=true;
      }
    });
    console.log("isexisting",isExisting);
    if(isExisting===false)
    {
      
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = 
      {
        className: 'react-flow__node-input react-flow__node-input.selectable'  ,
        id: getId(),
        type:"CustomNode",
        position,
        data: { label:tempQuestionStem },
       // style={styles.customNodeStyle},
      };
      newNode.data = { ...newNode.data, id: `${newNode.id}` };
      setElements((es) => es.concat(newNode));
      list['node_id']=newNode.id;
      question.current.push(list);   
      console.log("question is after current",question.current);
    }
    else
    {
      alert("Same question cannot be added twice");
    }
  };
  const edgeTypes = {
    customedge: customEdge,
  };
  const nodeTypes = {
    CustomNode: CustomNode,
  };
  const graphStyles = { width: "100%", height: "601px" };
  return (
    <>
    <div className="dndflow" >
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            style={graphStyles}
            edgeTypes={edgeTypes}
            onNodeDoubleClick={onNodeDoubleClick} 
          >
            <MiniMap className='minimap'
            nodeColor={(node) => {
              switch (node.type) {
                case 'input':
                  return '#e6a299';
                case 'output':
                  return '#a5e5e7';
                default:
                  return '#919e9e';
              }
            }}
            nodeStrokeWidth={3}
          />
          {/* control style style={{display: "flex",flexdirection: "row",bottom: "5px"}} */}
          <Controls style={{bottom: "5px"}}></Controls>
          <Button onClick={() => {
            
            console.log(JSON.stringify(elements));
            //question.current.shift();
            console.log("Questions: ",question.current);
            //edgeData.current.shift();
            checkEdges(elements);
            console.log("Edges",JSON.stringify(edgeData.current));
            
            }
            }//left left:"600px",bottom: "5px",top:"535px",
            className='react-flow__controls'
            style={{left:"40px",bottom: "0px",paddingLeft:"20px",paddingRight:"20px",
            top:"545px",position:"relative"}}
            >Save</Button>
          </ReactFlow>
              
        </div>
      </ReactFlowProvider>
    </div>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="add-question-modal"
        //onSubmit={handleSubmitUpdateQuestion}
      >
        <Modal.Header closeButton>
        <Modal.Title>Update Question</Modal.Title>
        </Modal.Header>
          <Form>
            <Modal.Body >      
                <InputGroup>
                    <InputGroup.Text>Question</InputGroup.Text>
                    <FormControl as="textarea" name="stem"  
                    onChange={handleStemChange} value={stem} >{nodeFound.stem}</FormControl>
                </InputGroup>
                <label className='question-categoty-name'>Category Name: {nodeFound.category}</label><br/>
                
                
                {optionList.map((T_option,i)=>(
                    <div key={T_option.id}>
                      <label>Options</label><br/>
                      <Form.Control  type="text" name="optionText" value={T_option.optionText} 
                      onChange={e=> handleOptionChange(e.target.name,e.target.value,i)} ></Form.Control><br/> 
                       <h5>Select Option Weightage</h5>   
                      <DropdownButton id="dropdown-basic-button" title={T_option.optionWeightage}  name="optionWeightage"
                value={T_option.optionWeightage}  onSelect={e => handleOptionChange("optionWeightage",e, i)} >
                          <Dropdown.Item eventKey="25">25</Dropdown.Item>
                          <Dropdown.Item eventKey="50">50</Dropdown.Item>
                          <Dropdown.Item eventKey="75">75</Dropdown.Item>
                          <Dropdown.Item eventKey="100">100</Dropdown.Item>
                          
                      </DropdownButton>
                      <div className="btn-box">
                  {optionList.length !== 1 && <button
                  style={{borderRadius:"20px",background:"white"}}
                    className="removeButton"
                    onClick={() => handleRemoveClick(i)}>-</button>}
                  {optionList.length - 1 === i && <button style={{borderRadius:"20px",background:"white"}} 
                  onClick={()=>handleAddClick(i)}>+</button>}
                </div>
                      </div>
                ))}
                
                
            
            </Modal.Body>
          </Form>
        <Modal.Footer>
          <Button type="submit" onClick={(e)=>{handleSubmitUpdateQuestion()}}>Save</Button>
        </Modal.Footer>
      </Modal>
      
    
    </>
  );
};
//update/