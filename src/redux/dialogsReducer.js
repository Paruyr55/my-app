import store from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReducer = (state, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;

        case SEND_MESSAGE:
            let text = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({ id: 3, message: text });
            return state;
        default:
            return state;
    }

};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
};

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
};

export default dialogsReducer;