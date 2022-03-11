const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export let initialState = {
        posts: [
            { id: 1, message: 'Բարև Ձեզ' },
            { id: 2, message: 'Մինչ նոր հանդիպում' }
        ],

        newPostText: 'it проект',
};

const profileReducer = (state = initialState, action) => {
    
        switch (action.type) {
            case ADD_POST:{
                let newPost = {
                    id: 3,
                    message: state.newPostText
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText : '',
                };
            }
            case UPDATE_NEW_POST_TEXT:
                return {
                    ...state,
                    newPostText: action.newText,
                };
                
            default:
                return state;
        }
    
    };
    

export const addPostActionCreator = () => {
    
    return {
        type: ADD_POST,
    }
};

export const updateNewPostTextActionCreator = (text) => {
    
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;