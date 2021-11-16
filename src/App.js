import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import {useState} from 'react';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date (2021, 2, 28)
  },
  {
    id: '2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date (2021, 2, 28)
  },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date (2021, 2, 28)
  },
  {
    id: '4',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date (2021, 2, 28)
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const saveNewExpenseHandler = (expenseData)=>{
    setExpenses((prev)=>{
      return [expenseData, ...prev];
    });
  }

  return (
    <div className="App">
          <NewExpense onSaveNewExpense = {saveNewExpenseHandler}/>
          <Expenses expenses= {expenses}/>
    </div>
  );
}

export default App;
