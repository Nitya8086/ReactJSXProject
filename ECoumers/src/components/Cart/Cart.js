import React from 'react'

const Cart = () => {
  const cartElements =<ul> {[

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ].map((item) => 
    <li>{item.title}</li>
    )}</ul>;
  return (
    <div>
      {cartElements}
      <div>
        <span>Total amount</span>
        <span>1000</span>
    </div>
    <div>
      <button>Purhase</button>
    </div>
    </div>
  );
}

export default Cart;