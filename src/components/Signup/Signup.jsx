import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signupUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/home";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div className="formC">
      <h2 className="title">Welcome back!</h2>
      <form>
        <label>Name</label>
        <input type="name" />
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <button>Signup</button>
      </form>
      <div className="bottom">
        <span>Already have an account?</span>
        <Link to="/"> Login</Link>
      </div>
    </div>
  );
};

export default Signup;
