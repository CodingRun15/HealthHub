import { Link, useNavigate } from "react-router-dom"
import '../css/Signup.css'
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleSignUp = async () => {
  // e.preventDefault();
  const userData = {
    name,
    email,
    password,
  };

  try {
      const res = await fetch("https://healthhub-sug1.onrender.com/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
  
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        navigate("/login");
      } else {
        console.error("Error creating user:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
}

return (
  <div className='main-container-signup'>
  <div className='main-container-form-signup'>
      <div className='form-sign-up'>
          <h1 className='signup'>Create an account</h1>
          <form className='signup'>
              <input type="text" placeholder='Name' className='form-field-signup' value={name} onChange={(e)=>setName(e.target.value)}/>
              <input type="email" placeholder='Email address' className='form-field-signup' value={email} onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" placeholder='Password' className='form-field-signup' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <button className='form-button-signup' onClick={handleSignUp}>Create Account</button>
          </form>
          <div>
              <hr className='signup' />
              <p id='signin-healthhub-signup'>
                  Already have an account? 
                  <Link className="signin-link-signup" to="/login">Sign in</Link>
              </p>
          </div>
      </div>
  </div>
</div>
)
}

export {Signup}