import react from "react";
import {container,AppBar,Typography,Grow,Grid} from "@material-ui/core"
import useStyles from "./styles"
import memorieBookIcon from "../src/images/memories.png"
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
function App() {
  const classes = useStyles();

  return (
   <>
   <container maxidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2"align="cener">MemorieBook</Typography>
      <img className={classes.image} src={memorieBookIcon} alt="memries" height="60" />
    </AppBar>
    <Grow in>
      <container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form/>
          </Grid>
        </Grid>
      </container>
    </Grow>
   </container>
   </>
  );
}

export default App;
