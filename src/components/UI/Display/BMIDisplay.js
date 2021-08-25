import Card from "../Card/Card.js";
import styles from "./BMIDisplay.module.css";

const BMIDisplay = (props) =>{
  const BMI = props.result;
   let uW = false;
   let h = false;
   let oW = false;
   let o = false;

   if(BMI > 0){
      if(BMI <= 18.5) uW = true;
      else if(BMI > 18.5 && BMI <= 24.9 ) h = true;
      else if(BMI > 25 && BMI <= 29.9 ) oW = true;
      else o = true;
   }


  return(
    <>
      <Card className={styles.mainCard}>
      <div className={styles.title}> 
          <h2>Body Mass Index(BMI)<hr/></h2>
      </div>
          <div className={styles.content}>  
          <h1>{BMI} <span className={styles.unit}>Kg/m^2</span></h1>
          </div>
          <div className={styles.heads}>
             <h2 className={`${styles.head} ${styles.head1} ${uW ? styles.headLevel : ''}`}>Underweight</h2>
             <h2 className={`${styles.head} ${styles.head2} ${h ? styles.headLevel : ''}`}>Healthy</h2>
             <h2 className={`${styles.head} ${styles.head3} ${oW ? styles.headLevel : ''}`}>Overweight</h2>
             <h2 className={`${styles.head} ${styles.head4} ${o ? styles.headLevel : ''}`}>Obese</h2>
          </div>
          <p className={styles.infoPara}> BMI is a scale that measures a person's leanness or corpulence based on their height and weight.
           It is used to estimate tissue mass. It's often used as a general measure of whether or not a person's
            body weight is appropriate for their height.</p>
         </Card>
      </>
  );
}
export default BMIDisplay;
// Below 18.5	Underweight
// 18.5–24.9	Healthy
// 25–29.9	Overweight
// 30 and above	Obese
// BMI of under 18.5
// A BMI of under 18.5 indicates that a person has insufficient weight, so they may need to put on some weight. They should ask a doctor or dietitian for advice.

// BMI of 18.5–24.9
// A BMI of 18.5–24.9 indicates that a person has a healthy weight for their height. By maintaining a healthy weight, they can lower their risk of developing serious health problems.

// BMI of 25–29.9
// A BMI of 25–29.9 indicates that a person is slightly overweight. A doctor may advise them to lose some weight for health reasons. They should talk with a doctor or dietitian for advice.

// BMI of over 30
// A BMI of over 30 indicates that a person has obesity. Their health may be at risk if they do not lose weight. They should talk with a doctor or dietitian for advice.