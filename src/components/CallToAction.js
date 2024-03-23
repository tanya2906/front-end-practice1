import './CallToAction.css';
import { FaPlay } from "react-icons/fa";
export const CallToAction = () => {
  return(
    <div className="call_to_action">
        <h1>Easy to setup. Easy to maintain</h1>
        <p>Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.</p>
        <div className='cta__button'>
            <i><FaPlay className='call'/></i>
            <div> Get Started</div>
        </div>
    </div>
  );
}
export default CallToAction;