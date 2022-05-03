import React,{useState,useRef,useEffect} from 'react'
import "./Interviewinformation.css"
import { DatePickerComponent, Inject, MaskedDateTime } from "@syncfusion/ej2-react-calendars";
import { Dropdown,DropdownButton } from 'react-bootstrap';
export default function Interviewinformation(props) {
  console.log("prop is",props.selectedJobDescription);
  const dateValue= new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
  const [InterviewDetail,setInterviewDetail]=useState({
    id:1,
    title:"",
    generationDate:"",
    startDate:"",
    endDate:"",
    location:"",
    type:"",
    position:"",
    jobDescription:""
  });
  //useState
  const [positionType,setPositionType]=useState();
  let temptype="Select Type",tempdetails={
    id:1,
    title:"",
    generationDate:"",
    startDate:"",
    endDate:"",
    location:"",
    type:"",
    position:"",
    jobDescription:""
  };
  const [startDate,setStartDate]=useState(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()));
  const [endDate,setEndDate]=useState(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1));
  
  let error;
  const [userErrors,setUserErrors]=useState({});
  const endateUpdater=()=>{
 //console.log( new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+2));
 setEndDate(new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+2));
 }
 
    tempdetails=props.selectedJobDescription;

      //InterviewDetail.title=props.selectedJobDescription.title;
    //  InterviewDetail.location=props.selectedJobDescription.location;
    temptype=props.selectedJobDescription.type;
  
 
    
    //  InterviewDetail.position=props.selectedJobDescription.position;
    //  InterviewDetail.jobDescription=props.selectedJobDescription.jobDescription;
  // setCount(count + 1);
  // console.log("count is",count);
 

  // setStartDate(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()));
  // setEndDate(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1));
  // setPositionType("Select Position");

useEffect(()=>{
change();
},[temptype])
const change=()=>{
  console.log("temp type is",temptype);
  setPositionType(temptype);
 }
 useEffect(()=>{
  updateinterview();
  },[tempdetails]);
  const updateinterview=()=>{
    setInterviewDetail(tempdetails);
    console.log("temp details in useeffect are",tempdetails);
    console.log("interviewdetails in useeffect are",InterviewDetail);
   }


  // const dateValue= new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
  // const [startDate,setStartDate]=useState(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()));
  // const [endDate,setEndDate]=useState(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1));
  // const [positionType,setPositionType]=useState("Select Position");
  // const [InterviewDetail,setInterviewDetail]=useState({
  //   id:1,
  //   title:"",generationDate:"",startDate:"",endDate:"",location:"",type:"",position:"",jobDescription:""});

    const changeHandler=(e)=>{
      console.log("i called");
      setInterviewDetail({...InterviewDetail,[e.target.name]:e.target.value});
    }
    
    const checkErrors=()=>{
      error={
          jobTitleError:"",
          positionTitleError:"",
          positionTypeError:"",
          locationError:"",
          jobDescriptionError:"",
      };
      let count=0;

     // console.log("userdata is",userData.userName.length);
      if(InterviewDetail.title.length==0){
          error.jobTitleError="Job title is required";
          count=count+1;
      }
      if(InterviewDetail.position.length==0)
      {
          error.positionTitleError="Job position title is required";
          count=count+1;
      }
      
      if(InterviewDetail.type=="Select Type")
      {
          error.positionTypeError="Type is required";
          count=count+1;
      }
      if(InterviewDetail.location.length==0)
      {
          error.locationError="Job location is required";
          count=count+1;
      }
      if(InterviewDetail.jobDescription.length==0)
      {
          error.jobDescriptionError="Description is required";
          count=count+1;
      }
      if(count==0)
      {return true;
      }
      else{
          return false;
      }
  }
    const submitForm=()=>{
      InterviewDetail.type=positionType;
      InterviewDetail.startDate=startDate.getMonth()+1 + "/" + startDate.getDate() + "/" + startDate.getFullYear();
      InterviewDetail.endDate=endDate.getMonth()+1+"/"+endDate.getDate()+"/"+endDate.getFullYear();
      InterviewDetail.generationDate=dateValue.getMonth()+1+"/"+dateValue.getDate()+"/"+dateValue.getFullYear();
      let errorResult=checkErrors();
      
      if(errorResult==false)
      {
        setUserErrors(error);
        console.log("Got error is",userErrors);
        console.log("Interview details are: ",InterviewDetail);
      }
      else{
        console.log("Interview details are: ",InterviewDetail);
      }
      
    }
  return (
    <div className='parent'>
      <div className="herodiv"><h3 className='typed-out'>Achieve Your Hiring Goals</h3>
      <svg className="curvesvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#0099ff" fillOpacity="1" d="M0,64L120,90.7C240,117,480,171,720,170.7C960,171,1200,117,1320,90.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      
      </div>
      <div className="jobdiv" >
      <div className='basicdetails'>
        <h3>Job Description Details</h3>
        <form>
          <div className="form-group">
            <label className="input-label"> Job Title</label>
            <input type="text" className="form-input" id="name-input"  value={InterviewDetail.title}
            placeholder="Description Title"  name="title" required onChange={(e)=>{changeHandler(e)}}/>      
            {userErrors.jobTitleError && <p className="field-error">{userErrors.jobTitleError}</p>}
          </div>

          <div className="form-group-dropdown1">
            <label className="input-label">Position Title</label>
            <input type="text" className="form-half-input" id="name-input" value={InterviewDetail.position}
            placeholder="Position"  name="position" required onChange={(e)=>{changeHandler(e)}}/>      
            {userErrors.positionTitleError && <p className="field-error">{userErrors.positionTitleError}</p>}
          </div>
          <div className="form-group-dropdown2">
            <label className="input-label"> Position Type</label>
          <DropdownButton className=''  title={positionType}  name="type" onSelect={(e)=>{setPositionType(e)}}
                 >
                  <Dropdown.Item eventKey="Full Time">Full Time</Dropdown.Item>
                  <Dropdown.Item eventKey="Part Time">Part Time</Dropdown.Item>
            </DropdownButton>    
            {userErrors.positionTypeError && <p className="field-error">{userErrors.positionTypeError}</p>}
          </div>
          <div className="form-group">
            <label className="input-label">Location</label>
            <input type="text" className="form-input" id="name-input" value={InterviewDetail.location}
            placeholder="Job Location"  name="location" required onChange={(e)=>{changeHandler(e)}}/>   
            {userErrors.locationError && <p className="field-error">{userErrors.locationError}</p>}
          </div>
          <div className="startdate">
            <label className="input-label">Start Date</label>
             <DatePickerComponent enableMask={true} placeholder='select date' name="startDate"
             value={startDate} min={dateValue} strictMode={true} onChange={(e)=>{setStartDate(e.value); endateUpdater() }}
             ><Inject services={[MaskedDateTime]} /></DatePickerComponent>
            <p className="field-error"></p>
          </div>
          <div className="enddate">
            <label className="input-label">End Date</label>
            
             <DatePickerComponent className="e-custom" enableMask={true} placeholder='select date' name="endDate"
             value={endDate} min={endDate} strictMode={true}  onChange={(e)=>{setEndDate(e.value)}}
             ><Inject services={[MaskedDateTime]} /></DatePickerComponent>
            <p className="field-error"></p>
          </div>
          
        </form>
        <div className="form-group">
           <button className="submit-button" onClick={(e)=>{submitForm()}}>
             SUBMIT</button>
          </div>
      </div>
      <div className="descriptiondetail"></div>
     <form>
     <div className="description-form-group">
            <label className="description-input-label">JOB DESCRIPTION</label>
            <textarea  className="description-form-input"  value={InterviewDetail.jobDescription}
            placeholder="Description of the job"  name="jobDescription" required onChange={(e)=>{changeHandler(e)}}/>   
           {userErrors.jobDescriptionError && <p className="field-error">{userErrors.jobDescriptionError}</p>}
            </div>
      </form>
          </div>
          
    </div>
  )
}
