import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

import { useState } from "react";

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsFormVisible(false);
  };

  const addNewExpenseHandler = () => {
    setIsFormVisible(true);
  };

  const cancelNewExpenseHandler = () => {
    setIsFormVisible(false);
  };

  if (!isFormVisible) {
    return (
      <div className="new-expense">
        <button type="button" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelNewExpense={cancelNewExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
