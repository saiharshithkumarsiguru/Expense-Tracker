import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
if(props.items.length === 0)
{
    return <h2 className = "expenses-list__fallback"> Found no expenses for the selected year</h2>;
}
return (
  <ul className = "expenses-list">
    {props.items.map(expense=>(
    <ExpenseItem
    key = {expense.id} //to let react know where to add the items in a list we give a unique key
    title={expense.title}
    amount={expense.amount}
    date={expense.date} />
  ))}

  </ul>
  
  );
};

export default ExpensesList;