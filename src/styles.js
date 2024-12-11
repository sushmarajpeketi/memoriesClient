// import makeStyles from '@mui/styles/makeStyles'; // default import 

import { makeStyles } from '@mui/styles'; //named import 

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 115,
    margin: '30px 30px 30px 30px', // Added 'px' for proper CSS units
    marginBottom: '50px', // Add margin to increase spacing below the appBar
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  
}));