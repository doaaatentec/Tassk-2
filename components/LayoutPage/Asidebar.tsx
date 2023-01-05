import {
  Typography,
  Avatar,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Stack,
  Button
  
} from "@mui/material";

import { Fragment } from "react";
import classes from "../../styles/layout.module.scss";

const Asidebar = () => {


  return (
    <aside className={classes.asidebarBox}>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText>username</ListItemText>
      </ListItem>
      <Stack spacing={2} >
        <Button variant='text'>About Us</Button>
        
        <Button variant='text'>About Me</Button>
        <Button variant='text'>About Us</Button>
      </Stack>
    </aside>
  );
};

export default Asidebar;
