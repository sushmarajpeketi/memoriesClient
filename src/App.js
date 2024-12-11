import React,{useEffect,useState} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'; // Note: Use Grid from @mui/material
import { ThemeProvider, createTheme } from '@mui/material/styles';
import memories from './images/memories.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';
import { useDispatch} from "react-redux";
import { getAllPostsAction } from "./actions/posts";
const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  console.log('Theme:', theme);
const App = () => {
    const [currentId,setCurrentId] = useState(0)
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(()=>{
    

        dispatch(getAllPostsAction());
    },[currentId,dispatch])

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <AppBar className={classes.appbar} position="static" color="inherit">
                    <Typography
                        className={classes.heading}
                        variant="h2"
                        align="center"
                    >
                        Memories <img className={classes.image} src={memories} alt="memories" height="60" width={60} />
                    </Typography>
                </AppBar>
                <div style={{ marginBottom: '50px' }}></div> 
                <Grow in>
                    <Container>
                        <Grid  className={classes.mainContainer} container  justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </ThemeProvider>
    );
};

export default App;
