import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
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

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onFilterSelect={filterChangeHandler}
          selected={yearFiltered}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
