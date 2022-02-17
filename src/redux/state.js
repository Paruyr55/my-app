import dialogsReducer, { sendMessageActionCreator, updateNewMessageTextActionCreator } from "./dialogsReducer";
import profileReducer, { addPostActionCreator, updateNewPostTextActionCreator } from "./profileReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Բարև Ձեզ' },
                { id: 2, message: 'Մինչ նոր հանդիպում' }
            ],

            newPostText: 'it проект'
        },

        dialogsPage: {
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

            newMessageText: '',
        },

    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }

};

export default store;
window.store = store;