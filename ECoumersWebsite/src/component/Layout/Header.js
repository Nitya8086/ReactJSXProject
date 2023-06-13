import React from 'react';
import classes from './Header.module.css';


export default function Header() {
  return (
    <div>
        <header className={classes.header}>
            <p>Home</p>
            <p>Store</p>
            <p>About</p>
            
        </header>
      
    </div>
  )
}
