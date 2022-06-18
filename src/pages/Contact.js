import React, {useRef,useEffect,useState} from 'react'
import Lottie from 'lottie-web'
import ContactSvg from '../components/contactsvg'
import Loader from '../components/Loader'
import Loader2 from '../components/Loader2'
const Contact = () => {
    // const contactcontainer=useRef(null)
    // useEffect(() => {
    //     Lottie.loadAnimation({
    //         contactcontainer:contactcontainer.current,
    //         renderer:'svg',
    //         loop:true,
    //         autoplay:true,
    //         animationData:require('../assets/revolving.json')

    //     })
         
    // }, [])
    const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 4360)
    }, [])
    return (
        <>
        {loading===false?
        <div className="contact-page-full-container">

        <div className="contactcontainer"  >
             <ContactSvg/>
        </div>
        <div className="contact-page-container-text">
            <div className="contact-page-text-container">

            <h1>Connect with  </h1>
            <div className="home-page-text-animation">
                        <span>m</span>
                        <span>e</span> 
                    </div>
            </div>
            <form action="">
                <input className="contact-page-input-one" type="text" placeholder="Name" />
                <input className="contact-page-input-two"  type="text" placeholder="email" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <div className="contact-page-contact-btn">

                <button>Submit</button>
                </div>
            </form>
        </div>
        </div>:
        <Loader2/>}
        </>
    )
}

export default Contact
