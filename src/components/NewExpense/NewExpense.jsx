import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

function NewExpense(props) {
  function saveExpenseDataHandler(data){
    const expenseData = {
      ...data,
      id: Math.random.toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;