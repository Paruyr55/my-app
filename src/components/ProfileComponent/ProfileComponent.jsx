import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profileinfo from './Profileinfo/Profileinfo';

const ProfileComponent = (props)=>{    
    return (      
      <div>
        <Profileinfo />
        <MyPostsContainer/>
      </div>
    )
}

export default ProfileComponent; 