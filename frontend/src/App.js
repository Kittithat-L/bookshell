import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import logobook from'./logo/book-solid.svg'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend server
    axios.get('http://localhost:5000/')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <div className='container'>
        <div className='Logo'>
          <img src={logobook} alt='BOOKSHELL' />
          <h1>BOOKSHELL</h1>
        </div>
        <div className='LoginForm'>
          <p><h1>Sign In</h1></p>
          <p><h4><a href='#1' className='CreateAccount'>New here? Create a VitalSource Account</a></h4></p>
          <div className='InputEmail'>
            <h2>Email</h2>
            <input type='email' name='Email' className='inpEmail'></input>
          </div>
          <div className='InputPassword'>
            <h2>Password</h2>
            <input type='password' name='Password' className='inpPassword'></input>
          </div>
          <div className='submitBTN'>
            <button type='submit' className='SubmitBTN'>Sign In</button>
          </div>
          <div className='ForgotPass'>
          <p><h4><a href='#1' className='Forgotpass'>Forgot Username / Password?</a></h4></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
