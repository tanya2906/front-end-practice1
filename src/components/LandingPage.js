import { FaDribbble,FaBehance,FaAngleLeft,FaAngleRight,FaCircle} from "react-icons/fa";
import "./LandingPage.css";
import { LPtext } from "./LPtext";
import { useEffect, useState } from "react";
export const LandingPage = () => {
    const [title,setTitle]=useState(LPtext[0].title);
    const [content, setContent] =useState(LPtext[0].content);
    const [subtitle, setSubtitle]=useState(LPtext[0].subtitle);
    const [i,setI]=useState(0);
    const [opacity,setOpacity]=useState(1);
    useEffect(()=>{
        const timer=setInterval(()=>{
            let activeItem=document.querySelectorAll('.landing-page .dots .dot');
            activeItem.forEach(element => {
                element.classList.remove('active');
            });
            setOpacity(0);
            setTimeout(()=>{
                if(i===LPtext.length-1){
                    setI(0);
                }
                else{
                    setI(i+1);
                }
                setSubtitle(LPtext[i].subtitle);
                setContent(LPtext[i].content);
                setTitle(LPtext[i].title);
                setOpacity(1);
                activeItem[i].classList.add("active");
            },500);
            
        },10000);
        return () => clearInterval(timer);
    },[i]);
  return(
    <div className="landing-page">
        <div className="header-menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#"><i><FaDribbble /></i></a></li>
                <li><a href="#"><i><FaBehance /></i></a></li>
            </ul>
        </div>
        <div className="main-content">
           {/* <i className="arrow"><FaAngleLeft/></i> */} 
            <div className="text" style={{opacity:opacity}}>
                <p>{subtitle}</p>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            {/* <i className="arrow"><FaAngleRight/></i> */} 
        </div>
        <div className="dots">
            <i><FaCircle className="dot active"/></i>
            <i><FaCircle className="dot"/></i>
            <i><FaCircle className="dot"/></i>
            <i><FaCircle className="dot"/></i>
        </div>
        <div className="sign-up">Create an Account</div>
    </div>
  );
}
export default LandingPage;
