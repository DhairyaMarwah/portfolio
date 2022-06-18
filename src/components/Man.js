import React, {useRef,useEffect} from 'react'
// import Lottie from 'lottie-web'
import Lottie from 'react-lottie';
import animationData from '../assets/man.json';
const Man = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        isClickToPauseDisabled:true,
        
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <>
          <Lottie 
	    options={defaultOptions} />  
        </>
    )
}

export default Man
