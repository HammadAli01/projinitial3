import React,{useState} from 'react'
import Interviewlist from './../Components/Interviewlist' 
import Interviewinformation from './../Components/Interviewinformation'
import Mainnavbar from './../Components/Mainnavbar';
import './InterviewDetails.css';
export default function InterviewDetails() {
  const [selectedJobDescription,setselectedJobDescription]=useState({title:"",generationDate:"",startDate:"",endDate:"",location:"",type:"Select Type",position:"",
  jobDescription:""   });
 // const [thestate,setTheState]=useState(1);
  return (
    <div className='wrapper'>
       <Mainnavbar/>
        <div className='interviewlist'><Interviewlist setselectedJobDescription={setselectedJobDescription}/></div>
       <div className='interviewdescription'>
         <Interviewinformation selectedJobDescription={selectedJobDescription}/>
         </div>
    </div>
  )
}
