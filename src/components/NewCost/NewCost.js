import React, {useState} from "react";
import CostForm from './CostForm';
import '../NewCost/NewCost.css'

const NewCost =(props)=>{

   const [isFormVisible, setisFormVisible] = useState(false);

    const saveCostDataHandler =(inputCostData)=>{
        const costData ={
            ...inputCostData,
            id:Math.random().toString()
        }
      props.onAddCost(costData);
      setisFormVisible(false)
    };
      const inputCostDataHandler = () =>{
        setisFormVisible(true)
      }

      const cancelCostHandler = () =>{
        setisFormVisible(false)
      }


 
return (
<div className="new-cost">
    {!isFormVisible && (
    <button onClick={inputCostDataHandler}
    > Добавить Новый Расход </button>
    )}
   {isFormVisible && <CostForm 
    onSaveCostData={saveCostDataHandler} 
    onCancel={cancelCostHandler}
    />}
</div>
);
}
export default NewCost;