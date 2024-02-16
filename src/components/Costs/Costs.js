
import './Costs.css'
import Card from "../UI/Card";
import React,{useState} from "react";
import CostsFilter from "./CostFilter";
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';


const Costs = (props)=> {

    const[selectedYear,setselectedYear]=useState('2021');

    const yearChangeHandler = (year)=>{
        
        setselectedYear(year);
    };

    const filteredCosts = props.costs.filter((cost) =>
        {
            return cost.date.getFullYear().toString()===selectedYear;
        });

        


    return (
<div>
        <Card className="costs">
            <CostsFilter 
             year={selectedYear} 
             onChangeyear={yearChangeHandler}/>
             <CostsDiagram costs={filteredCosts}/>
             <CostList costs={filteredCosts}/>
             
        </Card>
        </div>
    );
};
export default Costs;