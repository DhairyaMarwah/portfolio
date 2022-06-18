import React, {useRef,useEffect,useState} from 'react'
import TypinImg from '../assets/images/typing.svg'
import Lottie from 'lottie-web' 
import GitHubImg from '../assets/images/github.svg'
import InstaImg from '../assets/images/instagram.svg'
import LinkdinImg from '../assets/images/linkedin.svg'
import TwitterImg from '../assets/images/twitter.svg'
import Revolving from '../components/Revolving'
import Man from '../components/Man'
import Loader from '../components/Loader'
import FaceIcon from "../assets/images/faceicon.png"
import Social from '../components/Social'

const Home = () => {
    // const container=useRef(null)
    // useEffect(() => {
    //     Lottie.loadAnimation({
    //         container:container.current,
    //         renderer:'svg',
    //         loop:true,
    //         autoplay:true,
    //         animationData:require('../assets/man.json',)

    //     })
         
    // }, [])  
    // const containerevolving=useRef(null)
    // useEffect(() => {
    //     Lottie.loadAnimation({
    //         containerevolving:containerevolving.current,
    //         renderer:'svg',
    //         loop:true,
    //         autoplay:true,
    //         animationData:require('../assets/revolving.json')

    //     })
         
    // }, [])
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice"
    //     }
    //   };
    
    const containerplane=useRef(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
        {loading===false?
        <>
          
            <section className="home-page-first-section">
                <div className="home-page-first-section-text">
                    <div className="home-page-first-section-text-animation">

                    <h1>Hi all,I'm  </h1> 
                     <div className="home-page-text-animation">
                        <span>D</span>
                        <span>h</span>
                        <span>a</span>
                        <span>i</span>
                        <span>r</span>
                        <span>y</span>
                        <span>a</span>
                    </div>
                    </div>
                    <p>Front End Developer with a keen eye for <span>detail.</span> 
                    I am very passionate about aesthetics and <span>UI designs.</span> 
                    </p>
                  
<Social/>
                </div>
                 
                <div  className="home-page-first-section-img">
                    <Man/>
                </div>
            </section>
            <section className="home-page-2">
                <div className="home-page-section-2-text">
                    <h1>What I <span>do</span></h1>
                    {/* <p>CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY <span> TECH STACK</span></p> */}
                    <p>Prolific, frontend web developer with a passion for beating former <span> "best-yets</span>"
                    <br />WANTS TO EXPLORE EVERY <span> TECH STACK</span> </p>
                    
                </div>
                {/* <div className="face-icon-img">
                    <img src={FaceIcon} alt="" />
                </div> */}
                <div  className="home-page-section-2-img">

                <Revolving/>
                </div>
                {/* <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      /> */}
            </section>
            

            <section className="home-page-third-section">

            </section> 
            </>:
            <Loader/>
    }
        </>
    )
}

export default Home
