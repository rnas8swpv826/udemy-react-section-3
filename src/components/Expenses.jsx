import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card'

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) =>
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
        />
      )}
    </Card>
  )
}

export default Expenses;
