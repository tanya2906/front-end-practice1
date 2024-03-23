import './Contact.css';
import { useState } from 'react';
import { FaBuilding,FaEnvelope,FaPhone } from "react-icons/fa";
export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, like sending data to a server or displaying a success message
        console.log('Form submitted:', formData);
        // You can also clear the form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
  return(
    <div className='contact'>
        <div className='contacts'>
            <h2>Let’s Keep in Touch</h2>
            <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
            <span>
                <FaPhone />
                <p>+1 555 505 5050</p>
            </span>
            <span>
                <FaEnvelope />
                <p>info@designmodo.com</p>
            </span>
            <span>
                <FaBuilding />
                <p>San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909</p>
            </span>
        </div>
        <div  >
            <form action="#" className="contact_form" onSubmit={handleSubmit}>
                <label htmlFor="name">YOUR NAME</label>
                <input type="text" id="" name="name" value={formData.name} onChange={handleChange} placeholder='name'/>
                <label htmlFor="email">YOUR EMAIL</label>
                <input type="email" id="" name='email' value={formData.email} onChange={handleChange} placeholder='abc123@gmail.com' required/>
                <label htmlFor="message">YOUR MESSAGE</label>
                <textarea id="" cols={48} rows={6} name="message" value={formData.message} onChange={handleChange} placeholder='Message'></textarea><br/>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  );
}
export default Contact;