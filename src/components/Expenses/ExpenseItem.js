import React, { useState } from 'react'

import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem = (props) => {   
  
  const [title,setTitle] = useState(props.title);
  const clickHandler = () =>
  {
    setTitle("Title Updated")
  }

  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date}/>  {/*passing data of date from ExpenseItem to ExpenseDate */}
      <div className="expense-item__description">
        {/* <h2>{props.title}</h2> */}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Update Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
