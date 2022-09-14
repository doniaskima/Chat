import React from 'react';
import './App.css';
import Imessage from './components/Imessage';
import {selectUser} from "./features/userSlice";
import {useSelector} from "react-redux";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
    {user ?  <Imessage/> : <h2>You need to login</h2>}
    </div>
  );
}

export default App;
