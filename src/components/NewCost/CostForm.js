import React,  {useState} from "react"
import '../NewCost/NewForm.css'


const CostForm = (props) =>{

   const [inputname,setInputname] = useState('');
   const [inputamount,setInputamount]=useState('');
   const [inputdate,setInputdate] = useState('');

//   const [userInput, setUserInput] =  useState({
//     name:'',
//     amount:'',
//     date:''
//    });

const nameChangeHandler = (event) =>{
    setInputname(event.target.value);
// setUserInput({
//     ...userInput,
//     name:event.target.value
// })
};
 
const amountChangeHandler =(event) =>{
    setInputamount(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     amount:event.target.value
    // })
};

const dateChangeHandler = (event) =>{
    setInputdate(event.target.value)
// setUserInput({
//     ...userInput,
//     date:event.target.value
// })
};

const submitHandler = (event) =>{
    event.preventDefault();

    const costData ={
        description:inputname,
        amount:inputamount,
        date:new Date(inputdate)
    };
   props.onSaveCostData(costData);
    setInputname('');
    setInputamount('');
    setInputdate('');
};


    return <form onSubmit={submitHandler}>
        <div className ="new-cost__controls">
        <div className="new-cost__control">
        
        <label>Название</label>
        <input 
        type="text" 
        value = {inputname} 
        onChange={nameChangeHandler}/>
        </div>
        <div className ="new-cost__control">

        <label>Сумма</label>
        <input 
        type="number" 
        min="0.01" 
        value = {inputamount} 
        onChange={amountChangeHandler}
        step="0.01"/>
        </div>
        <div className ="new-cost__control">

        <label>Дата</label>
        <input 
        type="date" 
        min="2019-01-01" 
        value = {inputdate} 
        onChange={dateChangeHandler}
        step="2022-12-31"/>
        </div>
        <div className="new-cost__actions">
            <button 
            type="submit" >Добавить Расход</button>
            <button type='button'onClick={props.onCancel}> Отмена </button>
        </div>
        </div>
    </form>
}

export default CostForm;