import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const PieChart = (props) =>{
   const [kcal , ...dataArr] = props.data;
   const state = {
       labels:["Protein", "Carbohydrate" , "Fat"], 
       text:'kcal',
       datasets:[
           {
               label:kcal,
               backgroundColor:['#ff003a','#9afc60','#f5fb3a' ],
               borderColor:'white',
               borderWidth:6,
               data: dataArr,
               hoverOffset: 10, 
               
           }
       ]
   }

   return(
       <>
          <Doughnut data={state}  />
       </>
   );
}
export default PieChart;