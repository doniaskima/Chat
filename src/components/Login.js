import React from 'react'
import "./Login.css"
import login from "../assets/messanger.png"
const Login = () => {
  return (
      <div className="login">
          <div className="login-chat">
              <img src={login} alt="logo" />
              <h1 className="chat-title">Chat</h1>
              <button>Sign In</button>
          </div>
      </div>
  )
}

export default Login