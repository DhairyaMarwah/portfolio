import React from 'react'
import FaceIcon from "../assets/images/faceicon.png"
import Social from './Social'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="face-img">
                    <img src={FaceIcon} alt="" />
                </div>
                <div className="footer-text">
                    <h1>© Copyright 2021. All right reserved</h1>
                </div>
                <Social/>
            </div>
        </>
    )
}

export default Footer
