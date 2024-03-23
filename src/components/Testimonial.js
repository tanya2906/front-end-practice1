import React from 'react';
import './Testimonial.css';
import {Ttext} from './Ttext';
export const Testimonial = () => {
  return(
    <div className='testimonial'>
        <h2>Our Happy Clients</h2>
        <div className='clients'>
        {Ttext.map(item => (
          <div key={item.id} className='client_card'>
            <img src={item.imgSrc} alt="" />
            <span>
              <p>{item.content}</p>
              <p>{item.name}</p>
            </span>
          </div>
        ))}
            {/*<div className='client_card'>
                <img src={Ttext[0].imgSrc} alt="" />
                <span>
                    <p>{Ttext[0].content}</p>
                    <p>{Ttext[0].name}</p>
                </span>
            </div>
            <div className='client_card'>
                <img src={Ttext[1].imgSrc} alt="" />
                <span>
                    <p>{Ttext[1].content}</p>
                    <p>{Ttext[1].name}</p>
                </span>
            </div>
            <div className='client_card'>
                <img src={Ttext[2].imgSrc} alt="" />
                <span>
                    <p>{Ttext[2].content}</p>
                    <p>{Ttext[2].name}</p>
                </span>
            </div>
            <div className='client_card'>
                <img src={Ttext[3].imgSrc} alt="" />
                <span>
                    <p>{Ttext[3].content}</p>
                    <p>{Ttext[3].name}</p>
                </span>
            </div>
  */}
        </div>
    </div>
  );
}
export default Testimonial;
