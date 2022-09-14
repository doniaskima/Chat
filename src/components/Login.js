import React from 'react'
import "./Login.css"
import login from "../assets/messanger.png";
import { auth, provider } from "./firebase";
const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch(error => alert(error.message));
    }
    return (
     
      <div className="login">
          <div className="login-chat">
              <img src={login} alt="logo" />
              <h1 className="chat-title">Chat</h1>
                <button onClick={signIn}>Sign In</button>
          </div>
      </div>
  )
}

export default Login