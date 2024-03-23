import './Team.css';
import { Mtext } from './Mtext';
import { FaTwitter,FaFacebookF,FaInstagram ,FaGithub} from "react-icons/fa";
export const Team = () => {
  return(
    <div className='team'>
        <div className='title'>
            <h2>Startup Crew</h2>
            <p>The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.</p>
        </div>
        <div className='members'>
            {
                Mtext.map(item=>(
                    <div className='member' key={item.id}>
                        <img src={item.imgSrc}  alt="" />
                        <p>{item.name}</p>
                        <p className='position'>{item.position}</p>
                        <div className='social'>
                            <a href={item.link}><FaTwitter /></a>
                            <a href={item.link}><FaFacebookF /></a>
                            <a href={item.link}><FaInstagram /></a>
                            <a href={item.link}><FaGithub /></a>
                        </div>
                    </div>
                ))
                
            }
            
        </div>
    </div>
  );
}
export default Team;