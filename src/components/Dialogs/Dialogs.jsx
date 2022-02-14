import React from "react"
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import p from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props)=>{
    let dialogsData = [
        {id: 1, name: 'Partev'},
        {id: 2, name: 'Tigran'},
        {id: 3, name: 'Harut'},
        {id: 4, name: 'Lusine'},
        {id: 5, name: 'Vazgen'}

    ];

    let messageData = [
        {id: 1, message: 'Hay'},
        {id: 2, message: 'Ինչպե՞ս ես'}
    ];

    let dialogsElements = [dialogsData.map((dialog)=>{return(<DialogItem name= {dialog.name} id = {dialog.id}/>)})] 
    let messagesElements = [messageData.map((message)=>{return(<Message message = {message.message}/>)})]
        
   return (
       <div className={p.dialogs}>
           <div className={p.dialogsItems}>
               <DialogItem />
               {dialogsElements}
           </div>
           <div className={p.messages}>
               <Message />
                {messagesElements}
           </div>
                     
       </div>
   ) 
}

export default Dialogs;