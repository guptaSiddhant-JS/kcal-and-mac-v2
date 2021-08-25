import Card from "../Card/Card.js";
import styles from "./NotesDisplay.module.css";
const NotesDisplay = () =>{
  return(
    <>
      <Card className={`${styles.mainCard} ${styles.BMICard}`}>
          <p> Below 18.5	Underweight</p>
          <p> 18.5–24.9	Healthy</p>
          <p> 25–29.9	Overweight</p>
          <p> 30 and above	Obese</p>
         </Card>
      </>
  );
}
export default NotesDisplay;