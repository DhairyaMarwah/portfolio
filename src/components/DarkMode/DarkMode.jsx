import React from 'react' 
import '../../App.css'
const DarkMode = ({ toggled, onClick }) => {
     
    return (
         
        <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </div>
    )
}

export default DarkMode
