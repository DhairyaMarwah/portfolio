import React, {useRef,useEffect} from 'react'
// import Lottie from 'lottie-web'
import Lottie from 'react-lottie';
import animationData from '../assets/contact.json';

const ContactSvg = () => {
    // const containerrevol=useRef(null)
    // useEffect(() => {
    //     Lottie.loadAnimation({
    //         containerrevol:containerrevol.current,
    //         renderer:'svg',
    //         loop:true,
    //         autoplay:true,
    //         animationData:require('../assets/revolving.json',)

    //     })
         
    // }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        // <div  className="home-page-section-2-img">

        //         </div>

        <Lottie 
	    options={defaultOptions}
        // height={400}
        // width={1400}
        
      />
    )
}

export default ContactSvg
