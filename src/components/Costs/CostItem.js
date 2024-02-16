import './CostItem.css';
import CostDate from './CostDate';
import './CostDate.css'
import Card from '../UI/Card';


const CostItem = (props)=> {

    // const [description, setDescription] = useState
    // (props.description);

   

//     const changeDescriptionHandler = () => {
//         setDescription('New cost');
//     console.log(description);
// }
    return (
        <li> 
        <Card className='cost-item'>
            <CostDate date={props.date} />

            <div className='cost-item__description'> 
            <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>

            </div>
            {/* <button onClick={changeDescriptionHandler}
            >
                Изменить Описание
                </button> */}
        </Card>
        </li>
    );
}


export default CostItem;