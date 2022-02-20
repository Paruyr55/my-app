import React from "react"
import DialogItem from "./DialogItem/DialogItem";
import p from './Dialogs.module.css'
import Message from "./Message/Message";


const Dialogs = (props)=>{    
    
    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogs.map((dialog)=>{return(<DialogItem name= {dialog.name} key = {dialog.id} 
                                                                          id={dialog.id}/>)}); 
    let messagesElements = state.messages.map((message)=>{return(<Message message = {message.message} key = {message.id}
                                                                         id ={message.id}/>)});
    
    let onSendMessageClick = ()=>{        
        props.sendMessage();
    };

    let onNewMessageChange = (e)=>{
                     
        let text = e.target.value;
        props.updateNewMessageText(text);
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
                              value = {state.dialogs.newMessageText}
                              onChange = {onNewMessageChange}/>                    
                    <button className={p.sendBtn} onClick={onSendMessageClick}> Send </button>
                </div>
           </div>
                     
       </div>
   ) 
}

export default Dialogs;