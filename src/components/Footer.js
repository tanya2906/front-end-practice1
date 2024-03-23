import './Footer.css';
import { FaTwitter,FaFacebookF ,FaGooglePlusG} from "react-icons/fa";
export const Footer = (params) => {
  return(
    <div className='footer'>
        <div className='copyrights'>
            <h3>Startup 3</h3>
            <div className='social'>
                <p>Privacy Policy</p>
                <p>Terms</p>
                <FaTwitter className='icon'/>
                <FaFacebookF className='icon'/>
                <FaGooglePlusG className='icon'/>
            </div>
        </div>
        <hr />
        <div className='menu'>
            <div>
                <ul>
                    <li>Tour</li>
                    <li>Features</li>
                    <li>Pricing Plans</li>
                    <li>Our Works</li>
                    <li>Brands</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <p>Design by Tanya Saini</p>
        </div>
    </div>
  );
}
export default Footer;