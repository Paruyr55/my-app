import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";




let mapStateToProps = (state)=>{
    return {        
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        updateNewMessageText: (text)=>{dispatch(updateNewMessageTextActionCreator(text));},
        sendMessage: ()=>{dispatch(sendMessageActionCreator());}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;