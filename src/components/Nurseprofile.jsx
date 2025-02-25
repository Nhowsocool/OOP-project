import { useState } from "react";
import "../styles/Global.css";
import "../styles/Nurseprofile.css";
import * as React from 'react';

const Nurseprofile = () => {
    return (
      <div className="ContainerPage">
        {/* Banner */}
        <div className="Banner">
          <h1 className="BannerText">MEDSOFT</h1>
        </div>
        
        <div className="dropdown">
        <button className="dropbtn" >Menu</button>
        <div className="dropdown-content">
          <a href="nursequeue">Treatment queue</a>
          <p>Main</p>
        </div>
        </div>
        <div className="profile">
        <div className="nurseinfo">
            <div className="vitalstat">
                <div className="profileimg" >
                    <img src="Test-image.png" alt="fail" />
                <div>
                <p>Welcomeback</p>
                <p>Name: </p>
                <p>Email: </p>
                </div>   
                </div>
            </div>
        </div>
        
        <div className="nursetask">
            <div className="pages">
                <div>
                    <button>Task</button>
                    <button>Weekly</button>
                    <button>Assist</button>
                </div>
                <div className="profiletask">
                
                </div>
            </div>
                <div className="profileannouce">
                
                </div>
            
        </div>
        </div>
      </div>
      
    )
}
export default Nurseprofile