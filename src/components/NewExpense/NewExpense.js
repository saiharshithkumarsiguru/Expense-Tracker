import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);//passing expense data to app.js

    };
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>);

}

export default NewExpense;