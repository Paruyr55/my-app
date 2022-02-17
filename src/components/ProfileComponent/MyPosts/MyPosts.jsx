import React from 'react';
import Post from './Post/Post';
import classes from'./MyPosts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';


const MyPosts = (props) => {  

  let postElements = props.posts.map(p=><Post message ={p.message}/>);

  let newPostElement = React.createRef();
  
  let addPost = ()=>{
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = ()=>{
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div>
      <div className={classes.input}>
        My posts
        <div>
          <textarea name="" id="" cols="30" rows="10" 
                    onChange={onPostChange} 
                    ref={newPostElement} 
                    value={props.newPostText}/>
        </div>
        <div>
          <button  onClick={ addPost }>Add Post</button>
        </div>
      </div>
      <div className={classes.input}>
        New post
      </div>
      <div className={classes.posts}>
        {postElements}
      </div>
    </div>
      
    )
}

export default MyPosts; 