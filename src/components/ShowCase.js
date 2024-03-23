import { useState } from 'react';
import './ShowCase.css';
import { WText } from './WText';
export const ShowCase = () => {
    const [filter,setFilter]=useState(4);
    const [text,setText]=useState('View all Works')
    const changeFilter=()=>{
        if(filter!=WText.length)
        {
            setFilter(WText.length);
            setText('View less')
        }
        else
        {
            setFilter(4);
            setText('View all Works');
        }
    }
  return(
    <div className='showcase'>
        <div className='title'>
            <h2>Last works</h2>
            <div onClick={changeFilter}>{text}</div>
        </div>
        <div className='works'>
            {
                WText.filter(item => item.id<=filter).map( (item) =>(
                    <div className='work' key={item.id}>
                        <div  className="image">
                            <img src={item.imgSrc} alt="" />
                        </div>
                        <div className='description'>
                            <p>{item.subtitle}</p>
                            <p>{item.title}</p>
                        </div>
                </div>
                ))
                
                
            
            }
        </div>
    </div>
  );
}
export default ShowCase;