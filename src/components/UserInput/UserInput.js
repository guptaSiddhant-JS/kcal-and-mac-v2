 import React , {useState } from "react";
import TextField from '@material-ui/core/TextField'; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select'; 
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const UserInput = (props) =>{
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [activity, setActivity] = useState('');
    const [gender, setGender] = useState('');
    const [toggleBtn, setToggleBtn] = useState(false);
    const [errAge, setErrAge] = useState();
    const [errWeight, setErrWeight] = useState();
    const [errHeight, setErrHeight] = useState();
    const [errGender, setErrGender] = useState();
    const [errActivity, setErrActivity] = useState();
    // css
    const useStyles = makeStyles((theme) => ({
      root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
 
  },
    btn:{
      fontSize:'15px',
      color:'black',
      width: '20ch',
     backgroundColor:'#00fc7a',
     marginTop:'20px',
  
   }

  }));
  const classes = useStyles();

    const calculate = (el) =>{
      if(age === "" || age <=0 || age >= 90) { 
        setErrAge(true);
        return;
      }
       if(weight === "" || weight <=30 || weight >= 200) { 
        setErrWeight(true);
        return;
      }
       if(height === "" || height <=60  || height >= 250) { 
        setErrHeight(true);
        return;
      }
     if(gender === ''){
       setErrGender(true);
       return;
     }
     if(activity === ''){
       setErrActivity(true);
       return;
     }
    
     let result = 0;
     let BMR = 0;
     const BMI =( weight / Math.pow((height/100) , 2)).toFixed(1);
        if (gender === 'M'){
            // For men, BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age in years)
            BMR = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)).toFixed(0);
            result =  ( BMR * activity ).toFixed(0);

        }else{
            // For women, BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age in years)
            BMR = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)).toFixed(0);
            result =  ( BMR *activity ).toFixed(0);

        }
    
        props.onSaveResult(result);
        props.onSaveBMI(BMI);
        props.onSaveBMR(BMR);
        props.onSaveToggle(toggleBtn);
       setToggleBtn(true);
        
      }
      const reset = () =>{
        setAge('');
        setHeight('');
        setWeight('');
        setGender('');
        setActivity('');
        setToggleBtn(false);
        props.onSaveToggle(toggleBtn);
      }
 
     

   return (
     <>
       <form className={classes.root} autoComplete="off"  > 
             <TextField 
             autoFocus
             value={age}  
             type="number" 
             label="Age" 
             variant="outlined"
              {...errAge && {error:true , helperText:"Enter a valid Age !"}}  
              onChange={(el) => {setAge(el.target.value) ; setErrAge(false)}}
              />
             <TextField 
             value={weight}  
             type="number" 
             label="Weight(kg)" 
             variant="outlined" 
             {...errWeight && {error:true , helperText:"Enter a valid Weight !"}}  
             onChange={(el) => {setWeight(el.target.value) ; setErrWeight(false)}} 
             
             />
             <TextField 
             value={height} 
             type="number" 
             label="Height(m)" 
             variant="outlined" 
             {...errHeight && {error:true , helperText:"Enter a valid Height !"}}    
             onChange={(el) => {setHeight(el.target.value)  ; setErrHeight(false)}} 
              /><br/>
             {/*  */}
             <FormControl error={errGender} >
        <InputLabel >Gender</InputLabel>
        <Select
          value={gender}
          onChange={(el) => {setGender(el.target.value) ; setErrGender(false)}}
        >
          <MenuItem value={'M'}>Male</MenuItem>
          <MenuItem value={'F'}>Female</MenuItem>
        </Select>
       {errGender && <FormHelperText>Select a Valid Gender!</FormHelperText>}
         </FormControl>
             {/*  */}
        <FormControl  error={errActivity}>
        <InputLabel >Activity Level</InputLabel>
        <Select
          value={activity === -1 ? '' : activity}
          onChange={(el) => {setActivity(el.target.value) ; setErrActivity(false)}}
        >
          <MenuItem value={1.2}>little or no exercise</MenuItem>
          <MenuItem value={1.375}>exercise 1–3 days/week</MenuItem>
          <MenuItem value={1.55}>exercise 3–5 days/week</MenuItem>
           <MenuItem value={ 1.725}>exercise 6–7 days/week</MenuItem>
          <MenuItem value={1.9}>hard exercise 6–7 days/week</MenuItem>
        </Select>
        {errActivity && <FormHelperText>Select a Valid Activity!</FormHelperText>}
      </FormControl>
            <Button  variant="contained" className={classes.btn} onClick={calculate}>Calculate </Button>
            {toggleBtn && <Button  variant="contained" className={classes.btn} onClick={reset}>Reset </Button> }
            {/* <Button  variant="contained" className={classes.btn} onClick={ toggleBtn ? reset : calculate}> { toggleBtn ? 'Reset' : "Calculate "}</Button> */}
       </form>
       </>
   );
}
export default UserInput;

// For women, BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age in years)
// For men, BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age in years)

// Step 2: Calculate Your AMR
// Sedentary (little or no exercise): AMR = BMR x 1.2
// Lightly active (exercise 1–3 days/week): AMR = BMR x 1.375
// Moderately active (exercise 3–5 days/week): AMR = BMR x 1.55
// Active (exercise 6–7 days/week): AMR = BMR x 1.725
// Very active (hard exercise 6–7 days/week): AMR = BMR x 1.9

  