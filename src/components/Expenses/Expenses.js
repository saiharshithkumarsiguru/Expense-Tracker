import React, { useState } from 'react'
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) =>{  
  const [filteredYear,setFilteredYear] = useState('2020');
const filterChangeHandler = (selectedYear)=>{
  setFilteredYear(selectedYear);

}
const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
})
// To output conditional list based on filtered year
// let expensesContent = <p>No expense content for the year {filteredYear}.</p>
// if(props.items.length > 0)
// {
//   expensesContent = props.items.map(expense=>(
//     <ExpenseItem
//     key = {expense.id} //to let react know where to add the items in a list we give a unique key
//     title={expense.title}
//     amount={expense.amount}
//     date={expense.date} />
//   ))
// }


    return (
      <li>
       
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
        <ExpensesChart expenses = {filteredExpenses} />
        {/* Rendering List Items statically */}
             {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
       <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
       <ExpenseItem
         title={props.items[2].title}
         amount={props.items[2].amount}
         date={props.items[2].date}
      />
       <ExpenseItem
         title={props.items[3].title}
         amount={props.items[3].amount}
         date={props.items[3].date}
      /> */}

      {/* Rendering list items dynamically */}
      {/* {props.items.map(expense=>(
        <ExpenseItem
        key = {expense.id} //to let react know where to add the items in a list we give a unique key
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
      ))} */}


      {/* Render dynamic list data based on filtered year */}
      {/* {filteredExpenses.map(expense=>(
        <ExpenseItem
        key = {expense.id} //to let react know where to add the items in a list we give a unique key
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
      ))} */}

      {/* to render conditional content */}
      <ExpensesList items={filteredExpenses} />
        </Card>
        </li>
        
        );
}

export default Expenses;