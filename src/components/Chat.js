import React, { useState } from 'react'
import "./Chat.css";
import MicNoneIcon from '@mui/icons-material/MicNone';
import Message from "./message";
import { selectChatId, selectChatName } from '../features/chatSlice';
import { useSelector } from 'react-redux';
const Chat = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);
   
    const sendMessage = (e) => {
        e.preventDefault();

        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat-header">
                <h4>To:<span className="chat-Name">Channel name</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat-msg">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chatInput">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholdre="message.." />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <MicNoneIcon className="mic" />
            </div>

        </div>
    )
}

export default Chat