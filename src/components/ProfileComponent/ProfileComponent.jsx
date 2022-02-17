import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from'./ProfileComponent.module.css'
import Profileinfo from './Profileinfo/Profileinfo';

const ProfileComponent = (props)=>{    
    return (      
      <div>
        <Profileinfo />
        <MyPosts posts={props.state.posts} 
                 dispatch={props.dispatch}
                 newPostText={props.state.newPostText}/>
      </div>
    )
}

export default ProfileComponent; 