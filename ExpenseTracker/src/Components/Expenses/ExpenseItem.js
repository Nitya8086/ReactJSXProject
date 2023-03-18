import React,{useState} from 'react';

import ExpenseDate from './ExpenceDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  //function clickHandler for title
  const [title,setTitle] = useState(props.title);
  const clickOnHandler = () =>{
  setTitle('Updated!!')
  
  // function clickHnadeler for amount
  console.log(title);
  };
  const [amount,setAmount] = useState(props.amount);
  const clickHandler = () =>{
  setAmount('100$')
 
  console.log(amount);
};

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      
      <button onClick={clickOnHandler}>Delete Expense</button>
      <button onClick={clickHandler}>Change Expense</button>
      
    </Card>
  );
}

export default ExpenseItem;