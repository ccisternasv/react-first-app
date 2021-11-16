import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

function App() {

  const expenses = [
    {
      id: '',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date (2021, 2, 28)
    },
    {
      id: '',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date (2021, 2, 28)
    },
    {
      id: '',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date (2021, 2, 28)
    },
    {
      id: '',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date (2021, 2, 28)
    }
  ];
  
  const saveNewExpenseHandler = (expenseData)=>{
    console.log(expenseData);
  }

  return (
    <div className="App">
          <NewExpense onSaveNewExpense = {saveNewExpenseHandler}/>
          <Expenses expenses= {expenses}/>
    </div>
  );
}

export default App;
