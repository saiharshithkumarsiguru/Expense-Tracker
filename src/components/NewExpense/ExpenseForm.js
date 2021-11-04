import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Multi State approach
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');    
    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value);        
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);        
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);        
    };

    // single state approach
   
    //  const amountChangeHandler = (event) => {
    //      setEnteredAmount(event.target.value);        
    //  };
    //  const dateChangeHandler = (event) => {
    //      setEnteredDate(event.target.value);        
    //  };
    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate:'' });
     // const titleChangeHandler = (event) => {
    //     setUserInput(prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value}; };};   
    // const amountChangeHandler = (event) => {
    //     setUserInput(prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value}; };};   
    // const dateChangeHandler = (event) => {
    //     setUserInput(prevState)=>{
    //     return {...prevState,enteredDate:event.target.value}; };};   
    
    
    //To handle Form Submission
    const submitHandler=(event)=>{
        event.preventDefault(); //prevents from reloading the form when submitted
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData); //passing expense data to NewExpense.js
        //clearing the valjue of input fields after form submission
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        };
        

    
    return (
       <form onSubmit={submitHandler}>
           <div className = "new-expense__controls">
               <div className = "new-expense__control">
                   <label>Title</label>
                   {/* 2 way binding using value={enteredTitle} */}
                   <input type="text" value={enteredTitle} onChange={titleChangeHandler} /> 
               </div> 
               <div className = "new-expense__control">
                   <label>Amount</label>
                   {/* 2 way binding using value={enteredAmount} */}
                   <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/> 
               </div>
               <div className = "new-expense__control">
                   <label>Date</label>
                   {/* // 2 way binding using value={enteredDate} */}
                   <input type="date" value = {enteredDate} min = "2019-01-01" max = "2022-12-31" onChange={dateChangeHandler}/> 
               </div>   
           </div>
           <div className = "new-expense__actions">
               <button type="submit">Add Expense</button>
           </div>
       </form>
    );
}

export default ExpenseForm;
