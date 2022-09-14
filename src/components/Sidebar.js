import React,{useEffect, useState} from 'react'
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from '@mui/icons-material/RateReview';
import SidebaChat from './SidebaChat';
import {useSelector} from "react-redux"
import {selectUser} from "../features/userSlice"
import db, {auth} from "./firebase"
const Sidebar = () => {
    const user =useSelector(selectUser);
    const [chats, setChats] = useState([]);
    useEffect(()=>{
           db.collection('chats').onSnapshot(snapchot=>(
            setChats(snapchot.docs.map(doc=>({
                id:doc.id,
                data:doc.data(),
            })))
           ))
    },[])
    const addChat=()=>{
        const chatName = prompt("Please enter a Chat Name ");
        if(chatName){
                    db.collection('chats').add({
            chatName:chatName,
        })
        }
 
    }
        return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar onClick={()=>auth.signOut()} src={user.photo} className="sidebar-avatar"/>
                <div className="sidebar-input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
                <IconButton variant="outlined" className="sidebar-inputBtn">
                    <RateReviewIcon onClick={addChat} />
                </IconButton>


            </div>
            <div className="sidebar-chats">
            {chats.map(({id , data:{chatName}})=>(
               <SidebaChat key={id} id={id} chatName={chatName}/> 
            ))}
            </div>
        </div>
    )
}

export default Sidebar