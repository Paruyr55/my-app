import React from 'react';
import LikeCount from './LikeCount';
import classes from'./Post.module.css'
 


const Post = (props) => {
  return ( 
    <div className={classes.item}>      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXKGdKZxjWDJatds7-fvxpBzQe0fc8ON3Pw&usqp=CAU" alt="avatar" />
      {props['message']}
      <LikeCount count = '0'/>;            
    </div>
  )
}

export default Post;


