import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://healthhub-sug1.onrender.com/user/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
  
      if (res.ok) {
        const data = await res.json();
        if (data["login successful"]) { 
            const token = data["login successful"];
            localStorage.setItem("token", token);
    
            const userRes = await fetch("https://healthhub-sug1.onrender.com/user/profile", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
    
            if (userRes.ok) {
                const userData = await userRes.json();
                localStorage.setItem("user", JSON.stringify(userData));
                alert("You have Successfully Logged In!");
                navigate("/");
            } else {
                console.error("Failed to fetch user information:", userRes.statusText);
            }
        } else {
            alert("Token not found in response");
            console.error("Token not found in response:", data);
        }
    }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
    setEmail("");
    setPassword("");
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
                <input type="email" placeholder='Email address' className='form-field-login' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type={showPassword ? "text" : "password"} placeholder='Password' className='form-field-login' value={password} onChange={(e) => setPassword(e.target.value)} />
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