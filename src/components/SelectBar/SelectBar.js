import styles from './SelectBar.module.css';
import { NavLink } from "react-router-dom";

const SelectBar = () =>{
    return(
        <>
          <div className={styles.nav}> 
                 <div>
                     <h1 className={styles.heading}>
                     <NavLink to="/">
                     kcal & mac
                     </NavLink>
                     </h1>
                 </div>
                 <div className={styles.tags} >
                    <h3> <NavLink to="/home/bmi">BMI</NavLink></h3>
                 </div>
                 
          </div>
        </>
    );
}
export default SelectBar;