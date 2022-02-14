import React from "react"
import p from './../Dialogs.module.css'

const Message = (props)=>{
    return <div className="p.dialog">{props.message}</div>
};

export default Message;