import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

function Expenses( props ){
    const [filteredYear, setFilteredYear] = useState('2020');

    const expenses = props.expenses;

    const selectExpensesFilter = (selectedYear)=>{
        setFilteredYear(selectedYear);
      }
    
    const filteredExpenses = expenses.filter( expense =>{
        return  (expense.date).getFullYear().toString() === filteredYear;
    });
      
    return <div>
        <div>
          <ExpensesFilter selectedYear={filteredYear} onExpensesFilterSelection = {selectExpensesFilter}/>
        </div>
          <Card className="expenses">
              {
              filteredExpenses.map( expense =>{
                return <ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date}>
                        </ExpenseItem>
              })
              }
        </Card>
    </div>
    ;
}

export default Expenses;