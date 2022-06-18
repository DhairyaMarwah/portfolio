import React,{useRef,useEffect,useState} from 'react'
import ExpImg from '../assets/images/iuricode.svg'
import ExpHtml from '../assets/images/icon-html-cor.svg'
import ExpCss from '../assets/images/icon-css-cor.svg'
import ExpJs from '../assets/images/icon-js-cor.svg'
import Lottie from 'lottie-web'
import Loader from '../components/Loader'
import FaceIcon from "../assets/images/faceicon.png"  
import Interlot from '../components/Interlot'
import CodingBg from '../components/codingbg'
const Experience = () => {
  const containerplane=useRef(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 2000)
    }, [])
    
    return (
        <> 

        {loading===false?
        <div className='whole-experience-page'>
            <div className="experience-animation-section-whole">
            
            <section id="sobreMim">
            <div id="sobreFoto">
              <img
                src={ExpImg}
                // width="400px"
                // height="400px"
                alt=" "
                className="imagem-delay"
                id="iuricode"
              />
              <div id="figura1" className="icon1 descricao-delay">
                <img
                  src={ExpHtml}
                  width="45px"
                  height="45px"
                  alt=" "
                />
              </div>
              <div id="figura2" className="icon2 descricao-delay">
                <img
                  src={ExpCss}
                  width="45px"
                  height="45px"
                  alt=" "
                />
              </div>
              <div id="figura3" className="icon3 descricao-delay">
                <img
                  src={ExpJs}
                  width="45px"
                  height="45px"
                  alt=" "
                />
              </div>
              <div className="laptop-logo-img">
                <img src={FaceIcon} alt="" />
              </div>
            </div>
            
          </section>
          <section className="exp-page-animation-text-part">
              <h1>Frontend <span> Development</span></h1>
              <p>One small thing left… A smart and <span>talented designer.</span> </p>
          </section>
          </div>
              {/* <div ref={containerplane} className="containerplane-anim"></div> */}
          {/* <Interlot/> */}
          <div className="experience-container">
            <h1> <span>My</span> Experience</h1>
            <CodingBg/>
          </div>
          <div className="experience-card">
            
          </div>

              </div>
              : <Loader/>}
        </>

    )
}

export default Experience
