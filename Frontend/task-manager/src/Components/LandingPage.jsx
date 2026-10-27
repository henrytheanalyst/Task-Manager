import { useState } from "react";
import './Landing.css';
import axios from 'axios';

function LandingPage(){
    const [mode,setMode]=useState('login');
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [msg,setMsg]=useState("");
    const [msgType,setMsgType]=useState("");
    async function handleSubmit(e){
        e.preventDefault();
        setMsg("");
        if (mode === 'signup') {
            try {
                const response = await axios.post(
                    "http://localhost:3000/jarvis/signup",
                    {    
                        name:name,
                        email:email,
                        password:password

                    }
                );                
                setMsg(response.data.message);
                setMsgType("success")
                setMode('login');
                setName("");
                setEmail("");
                setPassword("")
                

            } catch (error) {
            setMsg(error.response?.data?.message || 'We are currently experiencing technical problem');  
            setMsgType("error");                 
            }
        } else {
            try {
                const response=await axios.post(
                "http://localhost:3000/jarvis/login",
                {    
                    email:email,
                    password:password

                }
            )
            localStorage.setItem("token",response.data.token)
            setMsg(response.data.message);
            setMsgType("success")
            } catch (error) {
                setMsg(error.response?.data?.message || 'We are currently experiencing technical problem');
                setMsgType("error");
            }
        }
    }
    return(
        <section className="landing-area">
            <form action="" className="form" onSubmit={handleSubmit}>
                {msg && (
                    <div className={`message-area ${msgType}`}>
                        {msg}
                    </div>
                )}
                <h2>
                    {mode === 'signup'? "Create your account":"Welcome Back"}
                </h2>
                <p className="subtitle">
                    {mode === 'signup' ? "Start organizing your work in minutes":"Log in to continue to your workspace"}
                </p>
                {mode === 'signup' && (
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input 
                            type="text"
                            id="name"
                            value={name}
                            required
                            placeholder="Alex Morgan"
                            onChange={(e)=>setName(e.target.value)} 
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        required 
                        placeholder="you@company.com"
                         value={email} 
                         onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        required 
                        placeholder="At least 8 characters" 
                        minLength={8}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type="submit" className="submit-btn">{mode === 'login'? "Log in":"Sign up"}</button>

                    <button type="button" onClick={()=>setMode(prevMode=>prevMode === 'signup' ? "login":"signup")} className="toggle-signup">
                       {mode === 'signup'? "Already have an account? Log in":" New to focusly? Create an account"}
                    </button>

            </form>
        </section>
    );
}
export default LandingPage;