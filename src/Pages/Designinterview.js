import React from 'react'
import Mainnavbar from '../Components/Mainnavbar'
import Questionbank from '../Components/Questionbank'
import DesignFlow from '../Components/DesignFlow'
import "./Designinterview.css"
export default function Designinterview() {
    return (
        <div className="wrapper">
            <Mainnavbar/>
            
                <div className="question">
                <Questionbank/>
                </div>
                <div className="interview">
                <DesignFlow />
                </div>
                
            </div>
     
    )
}
