import NewCost from "./components/NewCost/NewCost";
import Costs from "../src/components/Costs/Costs";
import React, {useState} from "react";

const  INITIAL_COSTS = [

  {
    id:'c1',
    date: new Date(2021, 2, 12),
    description: 'холодильник',
    amount: 999.99
  },
  {
    id:'c2',
    date: new Date(2019, 11, 25),
    description: 'macbook',
    amount: 1254.72
  },
  {
    id:'c3',
    date: new Date(2019, 4, 1),
    description: 'джинсы',
    amount: 49.99
  },
];

const App = () => {
  const [costs,setCosts] = useState( INITIAL_COSTS);
  
const addCostHandler = (cost) =>{
 setCosts(prevCosts=>{
  return [cost,...prevCosts]
 })
}

  return (
    <div>
    <NewCost onAddCost ={addCostHandler} />,
    <Costs costs={costs} />
    </div>
  );
};

export default App;
