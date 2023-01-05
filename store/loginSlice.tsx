import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";


export const loginSlice = createSlice({
  name: "sign form",
  initialState: { username: "", email: "", password: "" },
  reducers: {
    signUp(state, action) {
      const data = action.payload;
      if (state.email === data.email)
        console.log("you already have account");
        else{
          
            state.username = data.username;
            state.email = data.email;
            state.password = data.password;

         
        }
      
      console.log(data);
    },

    login(state, action) {
      const data = action.payload;
      state.email === data.email, (state.password = data.password);
    },
  },
});

export const loginAction = loginSlice.actions;
