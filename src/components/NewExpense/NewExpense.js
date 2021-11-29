import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);
  const toggleAddExpenseHandler = () => {
    setShowNewExpenseForm(prevState => {
      return !prevState;
    });
  };

  return (
    <div className='new-expense'>
      {showNewExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleAddExpenseHandler}
        />
      ) : (
        <button onClick={toggleAddExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
