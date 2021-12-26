import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch(
      'https://athena-hack-backend.herokuapp.com/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.user) {
      localStorage.setItem('token', data.user);
      alert('Login successful');
      window.location.href = '/';
    } else {
      alert('Please check your username and password');
    }
  }

  return (
    <div className="formC">
      <h2 className="title">Welcome back!</h2>
      <form>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={loginUser}>Login</button>
      </form>
      <div className="bottom">
        <span>Don’t have an account?</span>
        <Link to="/signup"> SignUp</Link>
      </div>
    </div>
  );
};

export default Login;
