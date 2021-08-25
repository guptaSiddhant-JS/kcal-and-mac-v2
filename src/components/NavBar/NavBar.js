import styles from './NavBar.module.css';
import HelpIcon from '@material-ui/icons/Help';
import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return(
        <>
          <div className={styles.nav}> 
                 <div>
                 <NavLink className={styles.link} to="/">
                     <h1 className={styles.heading}>
                     kcal & mac
                     </h1>
                       </NavLink>
                 </div>
                 <div className={styles.tags} >
                 <h3> <NavLink  className={styles.link} to="/home">Home</NavLink></h3>
                    <h3> <NavLink  className={styles.link} to="/services">Services</NavLink></h3>
                    <h3> <NavLink  className={styles.link} to="/products">Products</NavLink></h3>
                    <h3> <NavLink  className={styles.link} to="articles">Articles</NavLink></h3>
                    <HelpIcon />
                 </div>
                 
          </div>
        </>
    );
}
export default NavBar;