import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card'

function Expenses(props) {
  const [year, setYear] = useState("2020");

  function YearFilterChangeHandler(yearFilter) {
    setYear(yearFilter);
  };

  return (
    <div>
      <ExpensesFilter selected={year} onChooseFilterYear={YearFilterChangeHandler}/>
      <Card className="expenses">
        {props.expenses.map((expense) =>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        )};
      </Card>
    </div>
  );
};

export default Expenses;
