import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:6060/user/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log(data.token);
        localStorage.setItem("token", data.token);
        alert("You have Successfully Logged In!");
        navigate("/");
      } else {
        alert("Wrong Email or Password");
        console.error("Login failed:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
    setEmail("");
    setPassword("");
  }

    return (
        <div className='main-container-login'>
    <div className='main-container-form-login'>
        <div className='form-sign-in-login'>
            <h1 className='login'>Sign in</h1>
            <form className='login'>
                <input type="email" placeholder='Email address' className='form-field-login' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' className='form-field-login' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <p className='login'>
                    <input type="checkbox" />Show Password
                </p>
                <button className='form-button-login' onClick={handleSignIn}>Sign in</button>
                <p className='login'>
                    <button className='form-reset-password-login'>Reset password</button>
                </p>
            </form>
            <div>
                <hr className='login' />
                <p id='signup-healthhub-login'>
                    New to HealthHub? 
                    <Link className="signup-link-login" to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    </div>
</div>
    )
}

export {Login}