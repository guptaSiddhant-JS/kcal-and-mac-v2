import { useEffect , useState } from "react";
import KcalDisplay from "./KcalDisplay.js";
import MacrosDisplay from "./MacrosDisplay.js";
import NotesDisplay from "./NotesDisplay.js";
import BMIDisplay from "./BMIDisplay.js";
import BMRDisplay from "./BMRDisplay.js";
import style from './ResultDisplay.module.css';
import { Switch , Route , Redirect } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
const ResultDisplay = (props) =>{
  const [display, setDisplay] = useState({
    DisBMI:false,
    DisBMR:false,
    DisKcal:false,
    DisMacro:false
  });
 useEffect(() => {
   Aos.init({duration:2000}); 
 }, []);
  const displayBMI = () =>{
    setDisplay({
     DisBMI:true,
    DisBMR:false,
    DisKcal:false,
    DisMacro:false
    });
  };
  const displayBMR = () =>{
    setDisplay({
     DisBMI:false,
    DisBMR:true,
    DisKcal:false,
    DisMacro:false
    });
  };
  const displayKcal = () =>{
    setDisplay({
      DisBMI:false,
    DisBMR:false,
    DisKcal:true,
    DisMacro:false
    });
  };
  const displayMacros = () =>{
    setDisplay({
     DisBMI:false,
    DisBMR:false,
    DisKcal:false,
    DisMacro:true
    });
  };


  return(
      <div className={style.root}>
      <div className={style.options}>
      <button onClick={displayBMI} > BMI</button>
      <button onClick={displayBMR} > BMR</button>
      <button onClick={displayKcal} > Kcal</button>
      <button onClick={displayMacros} > Macro</button>
      </div>
      <div className={style.containerLeft}>
     {display.DisBMI && <div data-aos="fade-left"><BMIDisplay  result={props.resultBMI} /></div>}
     {display.DisBMR &&<div data-aos="fade-left"><BMRDisplay  result={props.resultBMR} /></div>}
     {display.DisKcal && <div data-aos="fade-left" ><KcalDisplay result={props.resultData}/></div>}
     {display.DisMacro &&  <div data-aos="fade-left" ><MacrosDisplay result={props.resultData}/></div>}
      </div>
      {/* <div data-aos="fade-up" className={style.containerRight}><NotesDisplay /></div> */}
      </div>
  );
}
export default ResultDisplay;