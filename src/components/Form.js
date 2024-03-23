import './Form.css';
import { useState } from 'react';
export const Form = () => {
    // State to manage form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to submit the form data, e.g., send it to a server
    console.log('Submitted:', { email, password });
  };
  return(
    <div className='form'>
        <div className='title'>
            <h2>We solve digital problems with an outstanding creative flare</h2>
            <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        </div>
        <div className='sign_up_form'>
            <form action="" onSubmit={handleSubmit}>
            <div className='input_field_type'>
                <ul>
                    <li>SIGN UP</li>
                    <li>LOGIN</li>
                </ul>
            </div>
            <div className='input_fields'>
                <input type="email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Your password'value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Create an Account"  id='create_account' />
            </div>
            <div className='login_via'>Login via Google</div>
            </form>
        </div>
    </div>
  );
}
export default Form;