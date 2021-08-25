import React , {useState } from "react";
import Card from '../Card/Card.js';

import UserInput from '../../UserInput/UserInput';
import ResultDisplay from './ResultDisplay.js';
import styles from './HomeDisplay.module.css';

const HomeDisplay = () =>{
  const [recivedKcal=0, setRecivedKcal] = useState();
 const [BMI, setBMI] = useState();
 const [BMR, setBMR] = useState();
 const [toggleBtn, setToggleBtn] = useState(false);
 const saveResultData = result =>{
      setRecivedKcal(result);
 }
  const saveBMI = bmi =>{
         setBMI(bmi);
  }  
  const saveBMR = bmr =>{
         setBMR(bmr);
  }  
  const saveToggle = t =>{setToggleBtn(prev => !prev)}
  return(
    <>
    
     <div className={styles.root}>   
     <div className={styles.main} > 
        <div className={styles.headContainer}> 
            <ResultDisplay 
                resultData={recivedKcal} 
                resultBMI={BMI} 
                resultBMR={BMR} 
            />
        </div>
       
        <div className={styles.inputContainer}>
        <Card className={styles.userInputCard}>
           <UserInput 
           onSaveResult={saveResultData} 
           onSaveBMI={saveBMI} 
           onSaveBMR={saveBMR} 
           onSaveToggle={saveToggle} 
           />
        </Card>
        </div>
         
      </div>
     
     </div>
    
    </>
  );
}
export default HomeDisplay;   
