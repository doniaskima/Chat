import React, { useEffect, useState } from 'react'
import "./Chat.css";
import MicNoneIcon from '@mui/icons-material/MicNone';
import Message from "./message";
import { selectChatId, selectChatName } from '../features/chatSlice';
import { useSelector } from 'react-redux';
import db from './firebase';
import firebase from "firebase";
import { selectUser } from '../features/userSlice';
const Chat = () => {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);
    const chatId = useSelector(selectChatId);
    const chatName =useSelector(selectChatName);
    useEffect(() => {
        if (chatId) {
            db.collection('chats')
                .doc(chatId)
                .collection("messages")
                .orderBy('timestamp', 'desc')
                .onSnapchot((snapshot) =>
                    setMessages(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data()
                    
                        }))
                    )
                );
            // the doc is going to be the chat id
            //enter that chat and then we're going to say go into collection inside of that chat and accedd messages
        }
    }, [chatId])
    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('chats')
            .doc(chatId)
            .collection("messages")
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                uid: user.uid,
                photo: user.photo,
                email: user.email,
                displayName:user.displayName,
        })

        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat-header">
                <h4>To:<span className="chat-Name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat-msg">
                {messages.map(({ id, data }) => (
                    <Message key={id} contents={data}/>
                ))}
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