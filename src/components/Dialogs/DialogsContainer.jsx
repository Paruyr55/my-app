import React from "react"
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import store from "../../redux/store";
import Dialogs from "./Dialogs";



const DialogsContainer = (props)=>{
    
    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = ()=>{        
        props.store.dispatch(sendMessageActionCreator());
    };

    let onNewMessageChange = (text)=>{
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };
    
   return (<Dialogs updateNewMessageText = {onNewMessageChange} sendMessage = {onSendMessageClick}
                    dialogsPage = {state}
                    newMessageText ={state.newMessageText}/>) 
}

export default DialogsContainer;