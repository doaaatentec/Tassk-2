import { Typography } from "@mui/material";
import Asidebar from "../components/LayoutPage/Asidebar";
import classes from "../styles/layout.module.scss";
const Layout = () => {
  return (
    <div className={classes.container}>
    <aside className={classes.asidebar}><Asidebar/></aside>
    <main className={classes['container-box']}>
      <nav className={classes.nav}><Typography variant='h3'>Navbar</Typography></nav>
    
     <section className={classes.contentBox}>
     <Typography variant='h3'>content</Typography>
     </section>
     
      <footer className={classes.footer}><Typography variant='h3'>Footer</Typography></footer>
      </main>
      
    </div>
  );
};

export default Layout;
