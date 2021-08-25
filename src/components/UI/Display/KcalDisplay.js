import Card from "../Card/Card.js";
import styles from "./KcalDisplay.module.css";
const KcalDisplay = (props) =>{
  const resKcal = +props.result ;
  const maintanace = resKcal;
  const eWL = resKcal - 500 ;
  const wL = resKcal - 250 ;
  const wG = resKcal + 250 ;
  const eWG = resKcal + 500 ;
  return(
      <>
         <Card className={styles.mainCard}>
            <div className={styles.title}> 
          <h2>Calories(kcals)/day<hr/></h2>
      </div>
            <Card className={`${styles.elementCard} ${styles.eWL}`}  >
              <p> Extreme Weight Loss (-500)</p> 
              <p> {eWL} kcals</p>
            </Card> 
            <Card className={`${styles.elementCard} ${styles.wL}`}>
              <p>  Weight Loss (-250)</p> 
              <p> {wL} kcals</p>
            </Card> 
            <Card className={`${styles.elementCard} ${styles.maintanace}`}>
              <p> Maintanace </p> 
              <p> {maintanace} kcals</p>
            </Card> 
            <Card className={`${styles.elementCard} ${styles.wG}`}>
              <p>  Weight Gain (+250)</p> 
              <p> {wG} kcals</p>
            </Card> 
            <Card  className={`${styles.elementCard} ${styles.eWG}`}>
              <p> Extreme Weight Gain (+500)</p> 
              <p> {eWG} kcals</p>
            </Card>  
            <p className={styles.infoPara}> The results provide a variety of daily calorie estimations that may
             be used as a guideline for how many calories to consume each day in 
             order to maintain, lose, or gain weight at a specific pace.</p>   
         </Card>
      </>
  );
}
export default KcalDisplay;