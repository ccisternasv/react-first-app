import React from 'react';
import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [ inputTitle, setTitle] = useState('');
    const [ inputAmount, setAmount] = useState('');
    const [ inputDate, setDate] = useState('');

    const cancelClickHandler = ()=>{
        setTitle('');
        setAmount('');
        setDate('');
        props.onCancelExpenseForm();
    }

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
    }

    const submitHandler =(event) =>{
        event.preventDefault();
        const expenseData = {
            title : inputTitle,
            amount :  +inputAmount,
            date: new Date(inputDate)
        };

        props.onSaveExpenseForm({...expenseData,
            id: Math.random()});
    };

    return <form onSubmit={submitHandler}><div className="new-expense__controls">
        <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={inputTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}  value={inputAmount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}  value={inputDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" name="cancel-new-form" onClick={cancelClickHandler}>Cancel</button>
            <button type="submit" name="add-new-expense">Add Expense</button>
        </div>  
        </form>

};

export default ExpenseForm;