import React,{useState} from 'react'
import './Interviewlist.css'
import userProfileImg from './../profile.jpg'
import Interviewinformation from './Interviewinformation';
export default function Interviewlist(props) {
   
    const descriptions=[{
        title:"Senior Software Engineer",generationDate:"02/11/2021",startDate:"02/15/2021",endDate:"12/17/2021",location:"Islamabad",type:"Full Time",position:"Developer",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."},
       ,{title:"Senior React Developer",generationDate:"24/02/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Designer,Developer",
        jobDescription:" Prepares and installs solutions by determining and designing system specifications, standards, and programmingImproves operations by conducting systems analysis and recommending changes in policies and procedures. Obtains and licenses software by obtaining required information from vendors, recommending purchases, and testing and approving products.Protects operations by keeping information confidential.Provides information by collecting, analyzing, and summarizing development and service issues. Accomplishes engineering and organization mission by completing related results as needed." 
    },{
        title:"Junior React Developer",generationDate:"25/02/2022",startDate:"22/04/2021",endDate:"22/06/2021",location:"Islamabad",type:"Full Time",position:"Game developing,UI/UX developer",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. " 
    },{
        title:"Senior testing Developer",generationDate:"02/11/2021",startDate:"10/04/2021",endDate:"12/04/2021",location:"Islamabad",type:"Full Time",position:"Management of developers",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."   },{
        title:"Junior Python Developer",generationDate:"14/02/2022",startDate:"10/06/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. " 
    },{
        title:"Senior React Developer",generationDate:"05/03/2022",startDate:"18/04/2021",endDate:"18/04/2021",location:"Islamabad",type:"Full Time",position:"Management",
        jobDescription:"Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code."   },{
        title:"Junior React Developer",generationDate:"10/04/2022",startDate:"12/04/2021",endDate:"12/06/2021",location:"Islamabad",type:"Part Time",position:"Management",
        jobDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " 
    }
    ]
    //<img src={userProfileImg} alt="user profile"></img>&nbsp;
  return (
    <>
<div className='joblist'>
    <div className='usertag'>interviews description</div>
    <div className="alladds">
{descriptions.map((description)=>{
    return(
        <div className='jobadd' tabIndex="0" onDoubleClick={(e)=>{
        console.log("selected add is",description);
        props.setselectedJobDescription(description);
        }}>
            <div className='jobdate'>{description.generationDate}</div>
        <div className='jobdescription'>{description.jobDescription}</div>
       </div>
    )
})}</div>
    </div>
    
  </>)
}
