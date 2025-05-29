/* eslint-disable no-unused-vars */
import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Title,Tooltip,Legend} from 'chart.js';
//Register required components
ChartJS.register(BarElement,CategoryScale,LinearScale,Title,Tooltip,Legend);
const BarChart=()=>{
    const data={
        labels:["Red","Blue","Yellow","Green","Purple","Orange"],
        datasets:[
        {
            label:"Votes",
            data:[12,19,3,5,2,3],
            backgroundColor:['red','blue','yellow','green','purple','orange'],
            borderWidth:1
        }
        ]
    };

    const options={
        
        plugins:{
            legend:{position:'top'},
            title:{display:true,text:"Sample Bar Chart"}
        }
    }
    return <BarChart data={data} options={options}/>
}
export default BarChart;