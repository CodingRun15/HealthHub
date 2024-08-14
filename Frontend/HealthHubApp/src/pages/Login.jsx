import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { useState } from 'react';
const Login = () => {
      const [form,setForm] = useState({
        email: "",
        password: ""
      });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]: e.target.value})
  
    }
  const handleSignIn = async (e) => {
    console.log(form);
    e.preventDefault();
    try {
      const res = await fetch("https://healthhub-sug1.onrender.com/user/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(form)
      });
      if(res.ok){
        const data = await res.json();
        const token = data["login successful"];
        localStorage.setItem("token", token);
        navigate("/");
      }else{
        console.log("Error logging in:", res.statusText);
      }
    }
         catch (error) {
      console.error("Error fetching token:", error);
    }
    setForm({
        email: "",
        password: ""
    })
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
}

    return (
        <div className='main-container-login'>
    <div className='main-container-form-login'>
        <div className='form-sign-in-login'>
            <h1 className='login'>Sign in</h1>
            <form className='login'>
                <input name='email' type="email" placeholder='Email address' className='form-field-login' value={form.email} onChange={handleChange}/>
                <input name='password' type={showPassword ? "text" : "password"} placeholder='Password' className='form-field-login' value={form.password} onChange={handleChange} />
                <p className='login'>
                <input type="checkbox" onChange={toggleShowPassword} checked={showPassword} />Show Password
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