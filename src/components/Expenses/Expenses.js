import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const [yearFiltered, setYearFiltered] = useState('2019');

  const filterChangeHandler = yearSelected => {
    console.log(yearSelected);
    setYearFiltered(yearSelected);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === yearFiltered;
  });

  let expensesContent = <p>No expenses to show.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onFilterSelect={filterChangeHandler}
          selected={yearFiltered}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
