import React from "react"
import { NavLink } from "react-router-dom";
import p from './../Dialogs.module.css'

const DialogItem = (props)=>{
    let path = '/dialogs/' + props.id;

    return <div className="p.dialog">        
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

export default DialogItem;