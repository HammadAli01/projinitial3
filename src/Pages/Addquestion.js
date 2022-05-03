import React,{useState,useRef} from 'react'
import {Container,Row,Col,Button,Modal,InputGroup,FormControl,Dropdown, DropdownButton,Accordion} from 'react-bootstrap'
import './Addquestion.css';
import Form from 'react-bootstrap/Form';
import { Toast } from 'react-bootstrap';
export default function Addquestion() {
  
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const openedQuestion=useRef();
  const [questionType,setQuestionType]=useState('close ended');
  const showOptions=useRef(true);
  const [stem,setStem]=useState('');
  const [category_name,setCategoryName]=useState("Select Category");
  const [stem_weightage,setStemWeightage]=useState("Select Weightage");
  const [semantictext,setSemanticText]=useState([{id:1,optionText:'',optionWeightage:'0'}]);
  let inputerror=useRef({stemError:"",categoryError:"",weightageError:"",optionsError:"",semanticError:""});
  const handleSemanticInput=(val)=>{
    semantictext.optionText=val;
  }
  const updateQuestionType=()=>{
      if(questionType=='close ended')
      {
        setQuestionType('open ended');
        showOptions.current=false;
      }
      else if(questionType=='open ended'){
        setQuestionType('close ended');
        showOptions.current=true;
      }
 
      //console.log("Question type is",questionType.current,"Show option is",showOptions.current);
  }
  const categories=[{
    "id": "1",
    "name": "Icebreakers"
  },
  {
    "id": "2",
    "name": "Experience"
  },
  {
    "id": "3",
    "name": "Environment"
  },
  {
    "id": "4",
    "name": "Timing"
  },
  {
    "id": "5",
    "name": "Education"
  },
  {
    "id": "6",
    "name": "Job"
  }]
    const handleShowOption=(optionid)=>{
        for(let i=0;i<Allquestions.length;i++){
            const elem=document.getElementsByClassName((i));
            //console.log("elem to hide are",elem);
            for(var a = 0; a < elem.length; a++) {
      elem[a].style.display='none'; }
    }
    if(openedQuestion.current==optionid){
        const elem=document.getElementsByClassName((optionid));
        for(var i = 0; i < elem.length; i++) {
  elem[i].style.display='none';
 }
 openedQuestion.current=-12;
    }
    else{
    openedQuestion.current=optionid;
        const elem=document.getElementsByClassName((optionid));
      
        for(var i = 0; i < elem.length; i++) {
          
  elem[i].style.display='revert';}
 }
        
        
    
        // if(showstatus=='revert'){
        //     setShowOptions('none');
        // }
        // else if(showstatus=='none'){
        //     setShowOptions('revert');
        // }
    }
    const [Allquestions,setAllQuestions]=useState([ {
        "id": "1",
        "question_weight": "25",
        "username": "admin",
        "stem": "Where are you from",
        "CategoryName": "Icebreakers",
        "optionArray": [
          {
            "id": 101,
            "optionText": "Islamabad",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "Rawalpindi",
            "optionWeightage": "70"
          },
          {
            "id": 103,
            "optionText": "Taxila",
            "optionWeightage": "80"
          },
          {
            "id": 104,
            "optionText": "Other",
            "optionWeightage": "90"
          }
        ]
      },
      {
        "id": "111",
        "question_weight": "25",
        "username": "admin",
        "stem": "From which institution are you graduated",
        "CategoryName": "Icebreakers",
        "optionArray": []
      },
      {
        "id": "2",
        "question_weight": "25",
        "username": "admin",
        "stem": "Are you willing to relocate to Islamabad for this job",
        "CategoryName": "Icebreakers",
        "optionArray": [
          {
            "id": 101,
            "optionText": "Yes",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "No",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "3",
        "question_weight": "25",
        "username": "admin",
        "stem": "Do you have experience",
        "CategoryName": "Experience",
        "optionArray": [
          {
            "id": 101,
            "optionText": "Yes",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "No",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "13",
        "question_weight": "25",
        "username": "admin",
        "stem": "Do you think you are qualified enough for this position",
        "CategoryName": "Experience",
        "optionArray": [
          {
            "id": 101,
            "optionText": "Yes",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "maybe",
            "optionWeightage": "60"
          },
          {
            "id": 103,
            "optionText": "No",
            "optionWeightage": "60"
          },
          {
            "id": 104,
            "optionText": "Dont Know",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "14",
        "question_weight": "25",
        "username": "admin",
        "stem": "What is your availability for this job",
        "CategoryName": "Environment",
        "optionArray": [
          {
            "id": 101,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 103,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 104,
            "optionText": "option1",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "4",
        "question_weight": "25",
        "username": "admin",
        "stem": "How many years of working do you have",
        "CategoryName": "Experience",
        "optionArray": [
          {
            "id": 101,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 103,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 104,
            "optionText": "option1",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "5",
        "question_weight": "25",
        "username": "admin",
        "stem": "Which type of work environment do you like?",
        "CategoryName": "Environment",
        "optionArray": [
          {
            "id": 101,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 103,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 104,
            "optionText": "option1",
            "optionWeightage": "60"
          }
        ]
      },{
        "id": "20",
        "stem": "Do you live in islamabad",
        "CategoryName": "Icebreakers",
        "question_weight": "50",
        "username": "hammad",
        "optionArray": [
          {
            "id": 101,
            "optionText": "Yes",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "No",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "21",
        "stem": "How are you feeling",
        "CategoryName": "Icebreakers",
        "question_weight": "50",
        "username": "hammad",
        "optionArray": [
          {
            "id": 101,
            "optionText": "Well",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "not well",
            "optionWeightage": "60"
          },
          {
            "id": 103,
            "optionText": "need assistance",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "22",
        "stem": "Do you have working expereince",
        "CategoryName": "Experience",
        "question_weight": "50",
        "username": "hammad",
        "optionArray": [
          {
            "id": 101,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 103,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 104,
            "optionText": "option1",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "23",
        "stem": "How many years of working do you have",
        "CategoryName": "Experience",
        "question_weight": "50",
        "username": "hammad",
        "optionArray": [
          {
            "id": 101,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 103,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 104,
            "optionText": "option1",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "24",
        "stem": "Which type of work environment do you like",
        "CategoryName": "Environment",
        "question_weight": "50",
        "username": "hammad",
        "optionArray": [
          {
            "id": 101,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 103,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 104,
            "optionText": "option1",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "id": "25",
        "stem": "Do you know about this company environment",
        "CategoryName": "Environment",
        "question_weight": "50",
        "username": "hammad",
        "optionArray": [
          {
            "id": 101,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 102,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 103,
            "optionText": "option1",
            "optionWeightage": "60"
          },
          {
            "id": 104,
            "optionText": "option1",
            "optionWeightage": "60"
          }
        ]
      },
      {
        "stem": "this is neq question ok zahid",
        "optionArray": [
          {
            "id": 1,
            "optionText": "this is option1",
            "optionWeightage": "50"
          },
          {
            "id": 32036588,
            "optionText": "haskjdfh",
            "optionWeightage": "75"
          },
          {
            "id": 49467571,
            "optionText": "asdf",
            "optionWeightage": "25"
          }
        ],
        "CategoryName": "Icebreakers",
        "username": "hammad",
        "question_weight": "50",
        "id": "NI2BAYK"
      }
   ]);
   const [optionList,setoptionList]=useState([{id:1,optionText: '',optionWeightage: '25'}]);
   //const [optionIndex,setOptionIndex]=useState([{optioncount:0}]);
   const handleOptionChange = (name,val, index) => 
    {
      const list = [...optionList];
      list[index][name] = val;
      setoptionList(list);
    };
    const handleRemoveClick = index => 
    {
//       const optindex=[...optionIndex];
//       optionIndex.map((anOption)=>{
//       if(anOption.optioncount==index){
// optindex.splice(index,1);
// setOptionIndex(optindex);}
// else{console.log("option index not deleted",index)}
// });

        const list = [...optionList];
      list.splice(index, 1);
      setoptionList(list);

    };
const checkErrors=()=>{
  let errorcount=0;
  inputerror.current={stemError:"",categoryError:"",weightageError:"",optionsError:"",semanticError:""};
if(stem.length==0){
  inputerror.current.stemError=" Question Text Is Empty ";
  errorcount=1;
}
if(category_name=="Select Category"){
  inputerror.current.categoryError=" Cateogry Not Selected ";
  errorcount=1;
}
if(stem_weightage=="Select Weightage"){
  inputerror.current.weightageError=" Question Weightage not selected ";
  errorcount=1;
}
if(questionType=='close ended'){
optionList.map((option)=>{
  if(option.optionText.length==0){
    inputerror.current.optionsError=" Option text is empty ";
    errorcount=1;
  }
});
}
if(questionType=='open ended'){
  inputerror.current.semanticError=" The expected answer of the question is empty ";
    errorcount=1;
}
//inputerror=inputerror+"";
if(errorcount==0){
  return false;
}
else{
  return true;
}
}
  // handle click event of the Add button
    const handleAddClick = (id) => 
    {
      var count=Math.ceil(Math.random()*99999999);
    setoptionList([...optionList, {id:count, optionText: '', optionWeightage: '25' }]);
    };
    const handleaddquestion=()=>{
      const res=checkErrors();
      if(res==false){
        setShowA(false);
      const current_username="hammad";
      let openended,passed_optionList;
      if(questionType=='open ended'){
        openended=true;
        passed_optionList=semantictext;
      }
      else{
        openended=false;
        passed_optionList=optionList;
      }
      const question={
        id:'1',
        stem:stem,
        question_weight:stem_weightage,
        CategoryName:category_name,
username:current_username,
optionArray:passed_optionList,
is_openended:openended
      }
      //send question to api
      //resetting
      setStem();
      setCategoryName("Select Category");
      setStemWeightage("Select Weightage");
      setSemanticText([{id:1,optionText:'',optionWeightage:'0'}]);
      setoptionList([{id:1,optionText: '',optionWeightage: '25'}]);
      inputerror.current='No errors';
      console.log("data is",question);
    
    }
      else{
        setShowA(true);
       // console.log(inputerror.current);
      }
    }
  return (
    <div className='add-parentcontainer'>
        <div className='add-sortcontainer'></div>
        <div className='add-tablecontainer'>
<div className='addquestion-form'>
    <h2>Add Question</h2>

   
    <InputGroup>
    <InputGroup.Text>Question</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" value={stem} placeholder='Write Your Question Here' 
    className='addquestion-text'onChange={(e)=>{setStem(e.target.value)}}/>
  </InputGroup>
 <div className='question-dropdowns'>
  <DropdownButton id="dropdown-item-button" title={category_name} onSelect={e=>setCategoryName(e)}>
      {categories.map((category)=>{
          return(
<Dropdown.Item as="button" eventKey={category.name}>{category.name}</Dropdown.Item>
          )
      })}
</DropdownButton>
<DropdownButton id="dropdown-item-button" title={stem_weightage}  onSelect={e=>setStemWeightage(e)}>
<Dropdown.Item  eventKey={25}>25</Dropdown.Item>
<Dropdown.Item  eventKey={50}>50</Dropdown.Item>
<Dropdown.Item  eventKey={75}>75</Dropdown.Item>
<Dropdown.Item  eventKey={100}>100</Dropdown.Item>   
</DropdownButton>
</div><div className='add-question-type'>
    <h5>Close ended</h5>
<label class="switch">
  <input type="checkbox" onClick={(e)=>{updateQuestionType()}}/>
  <span class="slider round"></span>
</label><h5>Open ended</h5>
</div>

{questionType=='close ended' &&
  <div className='optionsarea'>
        <h4>Options</h4><br/>
        <ul>
            {optionList.map((T_option,i)=>(
                <li> <div className='anaddoption'>{console.log(T_option)}
                   <input  type="text" placeholder="Enter option here" name="optionText"   value={T_option.optionText} 
                      onChange={e=> handleOptionChange(e.target.name,e.target.value,i)} required className="Addquestioninputfield"/><br/> 
                     
                     <DropdownButton id="dropdown-basic-button" title={T_option.optionWeightage}  name="optionWeightage"
                value={T_option.optionWeightage}  onSelect={e => handleOptionChange("optionWeightage",e, i)} required className="newquestionweightage">
                          <Dropdown.Item eventKey="25">25</Dropdown.Item>
                          <Dropdown.Item eventKey="50">50</Dropdown.Item>
                          <Dropdown.Item eventKey="75">75</Dropdown.Item>
                          <Dropdown.Item eventKey="100">100</Dropdown.Item>
                          
                      </DropdownButton>
                     
                     <div className="add-btn-box">
                     {optionList.length !== 1 && <button
                      className="add-optionremoveButton"
                      onClick={() => handleRemoveClick(i)}>-</button>}
                        {optionList.length - 1 === i && <button className="add-optionaddbutton"
                        onClick={()=>handleAddClick(i)}>+</button>}
                    </div>
                </div></li>
            ))}</ul>
                </div>}
                
{questionType=='open ended' &&
  <div className='optionsarea'>
<h3>Options</h3><br/>
<InputGroup>
    <InputGroup.Text>Answer</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" value={semantictext.optionText} placeholder='Write Your Answer Here' 
    className='openended-input'onChange={(e)=>{handleSemanticInput(e.target.value)}}/>
  </InputGroup>
  </div>
}
    <button className='question-add-button' onClick={()=>{handleaddquestion()}}>ADD</button>
    <Toast show={showA} onClose={toggleShowA} className='toast1' position='bottom-center'  delay={3000} autohide >
          <Toast.Header>
            {/* <img 
              src="" 
              className="rounded me-2"
              alt="Notification"
            /> */}
            <strong className="me-auto">Message</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body>{inputerror.current.stemError}{inputerror.current.stemError.length!==0 && <br/>}
          {inputerror.current.categoryError}{inputerror.current.categoryError.length!==0 && <br/>}
          {inputerror.current.weightageError}{inputerror.current.weightageError.length!==0 && <br/>}
          {inputerror.current.optionsError}{inputerror.current.optionsError.length!==0 && <br/>}
          {inputerror.current.semanticError}{inputerror.current.semanticError.length!==0 && <br/>}
          </Toast.Body>
        </Toast>
</div>
            <h2 className='add-tabletitle'>Interviews</h2>
            <div className='add-table'>
            <table className='add-interviews'>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Question</th>
              <th> Category</th>
              <th>Weight </th>
              <th>Options</th>
              
            </tr>
          </thead>
         
          <tbody>
         
          {Allquestions.map((question,index) => {
           const { stem, CategoryName, question_weight, optionArray } = question ;
        //    count.current=count.current+1;
        //    console.log("ct",count.current);
           return (
               <>
              <tr key={index+1} onClick={()=>{handleShowOption(index)}} className='questionrow'>
                <td>{index+1}</td>
                 <td>{stem.slice(0,35)+"..."}</td>
                 <td>{CategoryName}</td>
                 <td>{question_weight}</td>
                 <td>{optionArray.length}</td> 
              </tr>
            
            {/* <th className='optionhead'></th>
              <th className='optionhead'>option</th>
              <th className='optionweighthead'> weight</th>
              <th className='optionhead'></th>
               <th className='optionhead'></th> */}
              {optionArray.map((option,optionindex)=>{return(
  <tr key={(index+1)+"."+(optionindex+1)} style={{display:'none'}} className={index} id="options">
    <td className='option'>{(index+1)+"."+(optionindex+1)}</td>
    <th className='optionhead'>Option</th><td className='option'>{option.optionText}</td>
    <th className='optionweighthead'> Weight</th> <td className='option'>{option.optionWeightage}</td>
    
   
  </tr>
  
  )})}
              </>
           )
        })}
          </tbody>
        </table>
        </div>
        </div>
    </div>
  )
}
