import {Box , Stack , Button , Typography} from '@mui/material'
import LoginForm from './LoginForm';
import classes from '../../styles/components/form.module.scss'
import { useState } from 'react';
import SignForm from './SignForm';


const Form = ()=>{
    const [isLogin, setIsLogin] = useState(true);
    const [isSign, setIsSign] = useState(false);
    
 
    const toggleLoginHandler = () => {
      setIsLogin(!isLogin)
      setIsSign(!isSign)
      };

     
    return (
       
     <Box  className={classes.form}>
        <Stack direction='row' spacing={3} className={classes['form_btnsContainer']}>
        <Typography onClick={toggleLoginHandler} variant="h4" sx={{borderBottom:`2px solid ${isLogin ? 'white' : 'transparent'}` , color:'white' , paddingBottom:'1rem'}} >Sign In</Typography>
        <Typography onClick={toggleLoginHandler} variant="h4"  sx={{borderBottom:`2px solid ${isSign ? 'white' : 'transparent'}` , color:'white' , paddingBottom:'1rem'}} >Sign Up</Typography>
        </Stack>
      {isLogin && <LoginForm/>}
      {isSign && <SignForm/>}
      </Box>

  
    )

}

export default Form;
