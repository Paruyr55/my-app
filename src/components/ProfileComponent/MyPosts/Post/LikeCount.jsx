import React from 'react';

const LikeCount = (props)=>{           
    return(
      <div>
        <button onClick={(elem)=>elem.target.innerText++}>{props.count}</button>        
      </div>
    )  
  }

  export default LikeCount;