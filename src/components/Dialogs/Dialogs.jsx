import React from "react"
import { NavLink } from "react-router-dom";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import store from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import p from './Dialogs.module.css'
import Message from "./Message/Message";


const Dialogs = (props)=>{
    
    let dialogsElements = props.state.dialogs.map((dialog)=>{return(<DialogItem name= {dialog.name} id = {dialog.id}/>)}) 
    let messagesElements = props.state.messages.map((message)=>{return(<Message message = {message.message}/>)})
    let newMessageText = props.newMessageText;

    let onSendMessageClick = ()=>{
        store.dispatch(sendMessageActionCreator());
    };

    let onNewMessageChange = (e)=>{
       
        let text = e.target.value;
        store.dispatch(updateNewMessageTextActionCreator(text));
    };
    
   return (
       <div className={p.dialogs}>
           <div className={p.dialogsItems}>               
               {dialogsElements}
           </div>
           <div className={p.messages}>
                {messagesElements}
                <div className={p.txtBlock}>
                    <textarea name="" id="" cols="30" rows="60" 
                              className = {p.txtArea}
                              value = {newMessageText}
                              onChange = {onNewMessageChange}/>                    
                    <button className={p.sendBtn} onClick={onSendMessageClick}> Send </button>
                </div>
           </div>
                     
       </div>
   ) 
}

export default Dialogs;