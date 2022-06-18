import React, {useRef,useEffect} from 'react'
// import Lottie from 'lottie-web'
import Lottie from 'react-lottie';
import animationData from '../assets/preloader.json';

const Loader2 = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className="second-preloader">

        <Lottie 
	    options={defaultOptions} 
        />
        </div>
    )
}

export default Loader2
