import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);//passing expense data to app.js
        setIsEditing(false);

    };
    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = (event) =>{
        setIsEditing(true);
    }
    const stopEditingHandler = (event) => {
        setIsEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
        </div>);

}

export default NewExpense;