const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Partev' },
        { id: 2, name: 'Tigran' },
        { id: 3, name: 'Harut' },
        { id: 4, name: 'Lusine' },
        { id: 5, name: 'Vazgen' }
    ],

    messages: [
        { id: 1, message: 'Hay' },
        { id: 2, message: 'Ինչպե՞ս ես' }
    ],

    newMessageText: 'Մուտքագրեք հաղորդագրությունը',
};

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.text,
            };
            
        }
        case SEND_MESSAGE:            
            return {
                ...state,                
                messages: [...state.messages, {id:3, message:state.newMessageText}],
                newMessageText: '',
            };
            
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