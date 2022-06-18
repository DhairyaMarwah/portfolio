import React from "react";
import { useRef, useEffect } from "react";
import Graphic from "../assets/images/graphicera.png";
import DoonInt from "../assets/images/DIS.png";
import StThomas from "../assets/images/STC.png";
import { ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";
import { gsap } from "gsap";
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
const Education = () => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.defaults({ ease: "none" });

    const pulses = gsap
      .timeline({
        defaults: {
          scale: 2,
          autoAlpha: 1,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".ball02, .text01", {}, 0.84)
      .to(".ball03, .text02", {}, 1.36)
      .to(".ball04, .text03", {}, 1.92);

    const main = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
      .to(".ball01", { autoAlpha: 1, duration: 0.05 })
      .from(".theLine", { drawSVG: 0, duration: 4 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
          duration: 4,
        },
        0
      )
      .add(pulses, 0);
  }, []);

  return (
    <>
      <div className="Education-page">
        <div className="education-page-path">
          <svg
            ref={ref}
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 1200"
          >
            <path
              class="line01 line"
              stroke="#000"
              d="M 10 200  600 200"
            ></path>
            <path
              class="line02 line"
              stroke="#000"
              d="M 10 400  600 400"
            ></path>
            <path
              class="line03 line"
              stroke="#000"
              d="M 10 600  600 600"
            ></path>
            <path
              class="line04 line"
              stroke="#000"
              d="M 10 800  600 800"
            ></path>
            <path
              class="line05 line"
              stroke="#000"
              d="M 10 1000  600 1000"
            ></path>
            <text class="text01" x="30" y="190">
              2018
            </text>
            <text class="text02" x="30" y="390">
              2019
            </text>
            <text class="text03" x="30" y="590">
              2020
            </text>

            <path
              class="theLine"
              d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
              fill="none"
              stroke="#5429cf"
              stroke-width="6px"
            />

            <circle class="ball ball01" r="20" cx="50" cy="100"></circle>
            <circle class="ball ball02" r="20" cx="278" cy="201"></circle>
            <circle class="ball ball03" r="20" cx="327" cy="401"></circle>
            <circle class="ball ball04" r="20" cx="203" cy="601"></circle>
          </svg>
        </div>
        {/* <div className="education-page-images">
          <div className="st-thomas">
            <img src={StThomas} alt="" />
          </div>
          <div className="doon-international">
            <img src={DoonInt} alt="" />
          </div>
          <div className="graphic-era">
            <img src={Graphic} alt="" />
          </div>
        </div> */}
        <div class="tilt-container tilt-one">
        <div class="tilt-box-wrap">
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <div class="tilt-box">
          <img src={StThomas} alt="" />
          <h1>ST. Thomas College</h1>
          <h2>2012-2018</h2>
          </div>
        </div>
      </div>

      <div class="tilt-container tilt-second">
        <div class="tilt-box-wrap">
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <div class="tilt-box">
          <img src={DoonInt} alt="" />
          <h1>Doon Intr. School</h1>
          <h2>2018-2020</h2>
          </div>
        </div>
      </div>

      <div class="tilt-container tilt-third">
        <div class="tilt-box-wrap">
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <span class="t_over"></span>
          <div class="tilt-box">
          <img src={Graphic} alt="" />
          <h1>Graphic Era University</h1>
          <h2>2020-2024</h2>
          </div>
        </div>
      </div>

      
        
      
      </div>

    </>
  );
};

export default Education;
