import {Stack , TextField , Button , Box , Typography} from '@mui/material'
import { useState } from 'react';
import classes from '../../styles/components/form.module.scss'
import { loginAction } from '../../store/loginSlice';
import { useDispatch } from 'react-redux';


const Login = ()=>{
  const dispatch= useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [enterdEmail, setEnterdEmail] = useState<string>("");
    const [enterdpassword, setEnterdPassword] = useState<string>("");
   
  
  
    const toggleLoginHandler = () => {
      setIsLogin(!isLogin);
    };
  
    const enterdEmailHandler = (e: any) => {
      setEnterdEmail(e.target.value);
    };
  
    const enterdPasswordHandler = (e: any) => {
      setEnterdPassword(e.target.value);
    };
  
    const submitLoginHandler = async (e: any) => {
      e.preventDefault();
     const userData = {
      email : enterdEmail,
      password : enterdpassword,
     }
      dispatch(loginAction.login(userData))
    }

   
    return  <Box component="form" onSubmit={submitLoginHandler}  width='100%' height='20rem'>
   <Stack spacing={4} width='100%'>
    <TextField
     id="filled-email-input"
      label="Email"
      type="email"
      variant='filled'
      fullWidth
      value={enterdEmail}
      onChange={enterdEmailHandler}
      color='success'
      autoFocus
      sx={{backgroundColor:'#d3cece14', borderRadius:'5px' , fontSize:'1rems' , color:'white'}}
    />
    <TextField
      id="filled-password-input"
      label="Password"
      type="password"
      variant="filled"
      color='success'
      fullWidth
      value={enterdpassword}
      onChange={enterdPasswordHandler}
      sx={{backgroundColor:'#d3cece14', borderRadius:'5px' , fontSize:'1rems'}}
    />
    </Stack>
    <Button type="submit" variant="contained" color='success'  fullWidth sx={{margin:'3rem 0', fontWeight:'700' , fontSize:'1.2rem' , fontFamily:'system-ui'}}>
      Sign In
    </Button>
     <Button color='inherit' onClick={toggleLoginHandler}  sx={{fontSize:'.9rem' , alignSelf:'flex-start', color:'white' , fontWeight:'700' }}>
     <span className={classes['form_span']}>Don&apos;t have an account? </span> RISEST HERE
    </Button>
      
  </Box>
    
}

export default Login;