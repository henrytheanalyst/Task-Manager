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
                

            } catch (error) {
            setMsg(error.response?.data?.message || 'We are currently experiencing technical problem');

            setMode(login);

                
            }
        } else {
            const response=await axios.post(
                ""
            )
        }
    }
    return(
        <section className="landing-area">
            <form action="" className="form" onSubmit={handleSubmit}>
                <h2>
                    {mode === 'signup'? "Create your account":"Welcome Back"}
                </h2>
                <p className="subtitle">
                    {mode === 'signup' ? "Start organizing your work in minutes":"Log in to continue to your workspace"}
                </p>
                {mode === 'signup' && (
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input 
                            type="text"
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
                        required 
                        placeholder="At least 8 characters" 
                        minLength={8}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type="submit" className="submit-btn">{mode === 'login'? "Log in":"Sign up"}</button>

                    <p type="button" onClick={()=>setMode(prevMode=>prevMode === 'signup' ? "login":"signup")} className="toggle-signup">
                       {mode === 'signup'? "Already have an account? Log in":" New to focusly? Create an account"}
                    </p>

            </form>
        </section>
    );
}
export default LandingPage;