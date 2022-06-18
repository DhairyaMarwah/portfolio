import React ,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import DarkMode from './DarkMode/DarkMode';

const Navbar = () => { 
    // const [toggled, setToggled] = useState(false)
    // const handleClick=()=>{
    //     setToggled((s)=>!s)
    // }
    const [active, setActive] = useState(false)
    // const menuclick=()=>{
        
    // }
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

    return (
        <div className="whole-navbar" style={{top: visible ? '0' : '-90px'}} >
            {/* <nav>
        <Link to="/home">Home</Link> 
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">contact</Link>
        <DarkMode toggled={toggled} onClick={handleClick}/>
      </nav> */}

<header>
    <div className="full-header-section" >
      <div className="header-name-part"style={{top: visible ? '10px' : '-90px'}}>
          <h1> <span>&lt;</span> Dhairya Marwah <span>/&gt;</span> </h1>
      </div>
       
        <div style={{top: visible ? '15px' : '-90px'}} className={active? 'menu-toggler open':'menu-toggler'} onClick={()=>{setActive(!active)}}>
            <div className="bar half start"></div>            
            <div className="bar"></div>            
            <div className="bar half end"></div>            
        </div>
    </div>
        <nav className={active? 'top-nav open':'top-nav'}>
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-link" onClick={()=>{setActive(!active)}}>Home</Link>
                </li>
                {/* <li>
                    <Link to="/about" className="nav-link" onClick={()=>{setActive(!active)}}>About</Link>
                </li> */}
                <li>
                    <Link to="/experience" className="nav-link" onClick={()=>{setActive(!active)}}>experiences</Link>
                </li>
                <li>
                    <Link to="/education" className="nav-link" onClick={()=>{setActive(!active)}}>education</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link" onClick={()=>{setActive(!active)}}>contact</Link>
                </li>
                 
            </ul>
            
        </nav>

        
    </header>
        </div>
    )
}

export default Navbar
