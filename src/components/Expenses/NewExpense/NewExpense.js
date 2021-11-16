import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveNewExpenseHandler = (inputData)=>{
        props.onSaveNewExpense(inputData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseForm={saveNewExpenseHandler}></ExpenseForm>
    </div>
};

export default NewExpense;

