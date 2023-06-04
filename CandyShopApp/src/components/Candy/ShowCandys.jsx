import React from 'react';
import CandyItems from './CandyItems';
import classes from './showCandy.module.css';
export default function ShowCandys(props) {
    // console.log(props.candies);

    const candyItems = props.candies.map((item,key) =>{
        return <CandyItems key = {key} candyName = {item.candyName}  candyDescription = {item.candyDescription} candyPrice = {item.candyPrice} candyQuantity = {item.candyQuantity}  />
    })
    return(
        <div>
            <div className={classes.form}>
            <table>
                <tbody>
                <tr className={classes.row}>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Amount</th>
                    
                </tr>
                {candyItems}
                </tbody>
               
            </table>
            </div>
        
        </div>
    )
  
}
