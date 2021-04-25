import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) =>
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
        />
      )}
    </div>
  )
}

export default Expenses;
