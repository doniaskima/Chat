import React from 'react'
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from '@mui/icons-material/RateReview';
import SidebaChat from './SidebaChat';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar className="sidebar-avatar"/>
                <div className="sidebar-input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
                <IconButton variant="outlined" className="sidebar-inputBtn">
                    <RateReviewIcon />
                </IconButton>


            </div>
            <div className="sidebar-chats">
                <SidebaChat/>  
                 <SidebaChat/>  
                <SidebaChat /> 
            </div>
        </div>
    )
}

export default Sidebar