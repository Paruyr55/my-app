import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profileinfo from './Profileinfo/Profileinfo';

const ProfileComponent = (props)=>{    
    return (      
      <div>
        <Profileinfo />
        <MyPostsContainer store={props.store}/>
      </div>
    )
}

export default ProfileComponent; 