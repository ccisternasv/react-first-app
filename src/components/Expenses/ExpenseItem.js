import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem( props){
    const title = props.title;
    const price = props.amount;
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    {price}
                </div>
            </div>
            <button>Change Title</button>
        </Card>
        )
}

export default ExpenseItem;