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

  const expenses = props.expenses;
  // console.log(props);
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onFilterSelect={filterChangeHandler}
          selected={yearFiltered}
        />
        {expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
