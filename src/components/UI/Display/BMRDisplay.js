import Card from "../Card/Card.js";
import styles from "./BMRDisplay.module.css";

const BMIDisplay = (props) =>{
  const BMI = props.result;
  

  return(
    <>
      <Card className={styles.mainCard}>
      <div className={styles.title}> 
          <h2 className={styles.titleHeader}>Body Mass Ratio(BMR)<hr/></h2>
      </div>
          <div className={styles.content}>  
          <h1>{BMI} <span className={styles.unit}>Calories/day</span></h1>
          </div>
          
          <p className={styles.infoPara}> BMR is the amount of energy required to rest in a moderate environment 
          with an idle digestive system. It's the same as calculating how much gas an 
          idle automobile uses while parked. Energy will only be required to maintain 
          important organs such as the heart, lungs, kidneys, nervous system, intestines,
           liver, lungs, sex organs, muscles, and skin in such a state.</p>
         </Card>
      </>
  );
}
export default BMIDisplay;