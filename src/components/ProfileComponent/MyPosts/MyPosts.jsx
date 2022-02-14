import React from 'react';
import Post from './Post/Post';
import classes from'./MyPosts.module.css'

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'Բարև Ձեզ'},
    {id: 2, message: 'Մինչ նոր հանդիպում'}
  ];

  let postElements = [posts.map(p=><Post message ={p.message}/>)];
  return (
    <div>
      <div className={classes.input}>
        My posts
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add Post</button>
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