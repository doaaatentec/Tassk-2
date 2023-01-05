import {Stack , TextField , Button , Box } from '@mui/material'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/loginSlice';
import axios from 'axios';



const SignForm =()=>{
  const dispatch = useDispatch();
    const [enterdEmail, setEnterdEmail] = useState<string>("");
    const [enterdpassword, setEnterdPassword] = useState<string>("");
    const [enterdUsername, setEnterdUsername] = useState<string>("");
  
  
    const enterdUsernameHandler = (e: any) => {
        setEnterdUsername(e.target.value);
      };
  
      
    const enterdEmailHandler = (e: any) => {
      setEnterdEmail(e.target.value);
    };
  
    const enterdPasswordHandler = (e: any) => {
      setEnterdPassword(e.target.value);
    };
  
    const submitLoginHandler = async (e: any) => {
      e.preventDefault();
      const user = {
        username : enterdUsername , 
        email : enterdEmail , 
        password : enterdpassword 
        }
        dispatch(loginAction.signUp(user))
    }


    return <Box component="form" onSubmit={submitLoginHandler}  width='100%' height='20rem'>
    <Stack spacing={4} width='100%'>
    <TextField
       id="filled-username-input"
       label="username"
       type="text"
       variant="filled"
       color='success'
       fullWidth
       value={enterdUsername}
       onChange={enterdUsernameHandler}
       autoFocus
       sx={{backgroundColor:'#d3cece14', borderRadius:'5px' , fontSize:'1rems'}}
     />
     <TextField
      id="filled-email-input"
       label="Email"
       type="email"
       variant='filled'
       fullWidth
       value={enterdEmail}
       onChange={enterdEmailHandler}
       color='success'
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
       Sign Up
     </Button>
    
       
   </Box>
}

export default SignForm;