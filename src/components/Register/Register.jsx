import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);
    if (data.status === 'ok') {
      navigate('/login');
      console.log(data);
    }
  }

  return (
    <div className="formC">
      <h2 className="title">Welcome back!</h2>
      <form>
        <label>Name</label>
        <input type="name" onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={registerUser}>Signup</button>
      </form>
      <div className="bottom">
        <span>Already have an account?</span>
        <Link to="/"> Login</Link>
      </div>
    </div>
  );
};

export default Register;
