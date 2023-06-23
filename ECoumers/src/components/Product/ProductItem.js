import React from 'react'

export default function ProductItem(props) {

    console.log(props.imageUrl);
    
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.price}</div>
      <img src={props.imageUrl} alt='no found'/>

    </div>
  
  )
 
}
