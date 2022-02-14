import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from'./ProfileComponent.module.css'
import Profileinfo from './Profileinfo/Profileinfo';

const ProfileComponent = ()=>{
    return (
      <div>
        <Profileinfo />
        <MyPosts />
      </div>
    )
}

export default ProfileComponent; 