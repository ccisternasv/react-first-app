import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveNewExpenseHandler = (inputData)=>{
        props.onSaveNewExpense(inputData);
        stopEditingHandler();
    };

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler= ()=>{
        setIsEditing(true);
    }

    const stopEditingHandler= ()=>{
        setIsEditing(false);
    }

    return <div className="new-expense">
        { !isEditing && <button type="button" name="open-form" onClick = {startEditingHandler}>Add New Expense</button> }
        { isEditing && <ExpenseForm onCancelExpenseForm = {stopEditingHandler} onSaveExpenseForm={saveNewExpenseHandler}></ExpenseForm>}
    </div>
};

export default NewExpense;

