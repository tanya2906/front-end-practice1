import './Features.css';
import {FaCircle,FaCopy} from 'react-icons/fa';
import { IoDiamondOutline } from "react-icons/io5";
import { Ftext } from './Ftext';
import { useState,useEffect } from 'react';
export const Features = () => {
    const[title,setTitle]=useState(Ftext[0].title);
    const[text,setText]=useState(Ftext[0].text);
    const[feature1,setFeature1]=useState(Ftext[0].feature1);
    const[feature2,setFeature2]=useState(Ftext[0].feature2);
    const[f1text,setF1text]=useState(Ftext[0].f1text);
    const[f2text,setF2text]=useState(Ftext[0].f2text);
    const [i,setI]=useState(0);
    const [opacity,setOpacity]=useState(1);
    useEffect(()=>{
        const timer=setInterval(()=>{
            let activeItem=document.querySelectorAll('.features .dots .dot');
            activeItem.forEach(element => {
                element.classList.remove('active');
            });
            setOpacity(0);
            setTimeout(()=>{
                if(i===Ftext.length-1){
                    setI(0);
                }
                else{
                    setI(i+1);
                }
                setTitle(Ftext[i].title);
                setText(Ftext[i].text);
                setFeature1(Ftext[i].feature1);
                setFeature2(Ftext[i].feature2);
                setF1text(Ftext[i].f1text);
                setF2text(Ftext[i].f2text);
                setOpacity(1);
                activeItem[i].classList.add("active");
            },500);
            
        },20000);
        return () => clearInterval(timer);
    },[i]);
    return(
        <div className='features'>
            <div className='mockup'>
                <img src={process.env.PUBLIC_URL + '/images/pc.png'} alt="PC" />
                <img src={process.env.PUBLIC_URL +"/images/Screen-Effects.png"} alt="" />
            </div>
            <div className='Content'>
                <div className='text' style={{opacity:opacity}}>
                <div className='title'>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div  className='sub_title'>
                <div className='feature1'>
                    <i><FaCopy className='icon'/></i>
                    <p>{feature1}</p>
                    <p>{f1text}</p>
                </div>
                <div className='feature2'>
                    <i><IoDiamondOutline className='icon'/></i>
                    <p>{feature2}</p>
                    <p>{f2text}</p>
                </div>
                </div>
                </div>
                
                <div className='dots'>
                <i><FaCircle className='dot active'/></i>
                <i><FaCircle className='dot'/></i>
                <i><FaCircle className='dot'/></i>
                <i><FaCircle className='dot'/></i>
                </div>
            </div>
            
        </div>
    );
}
export default Features;