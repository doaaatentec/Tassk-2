import {Stack , TextField , Button , Box , Typography} from '@mui/material'
import { useState  , useEffect} from 'react';
import classes from '../../styles/components/form.module.scss'
import { useForm } from 'react-hook-form';
import { stringify } from 'querystring';
import { watch } from 'fs';


const Login = ()=>{
  interface User {
    email : string,
    password : string
  };


  const defaultValues : User = {
    email : '',
    password : ''
  }
  const {register , handleSubmit} = useForm({defaultValues})
    const [isLogin, setIsLogin] = useState(true);
  
  
   
    const toggleLoginHandler = () => {
      setIsLogin(!isLogin);
    };

    const handleLogin = (e)=>{
      e.preventDefault();
     const userData =  handleSubmit((data)=>
     console.log(data))

      userData()
    }
  
    
   
    return  <Box component="form" onSubmit={handleLogin}  width='100%' height='20rem'>
   <Stack spacing={4} width='100%'>
    <TextField
     id="filled-email-input"
      label="Email"
      type="email"
      {...register('email')}
      variant='filled'
      fullWidth
      color='success'
      autoFocus
      sx={{backgroundColor:'#d3cece14', borderRadius:'5px' , fontSize:'1rems' , color:'white'}}
    />
    <TextField
      id="filled-password-input"
      label="Password"
      type="password"
      {...register('password')}
      variant="filled"
      color='success'
      fullWidth
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