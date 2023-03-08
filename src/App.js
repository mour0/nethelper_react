import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Store from '@mui/icons-material/Store';

import Grid2 from '@mui/material/Unstable_Grid2';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';


import TxtSanitized from './Components/TxtSanitized';
import BtnAction from './Components/BtnActions'
import ListResults from './Components/ListResults'
import TxtHosts from './Components/TxtHosts';
import SnackbarError from './Components/SnackbarError';


export default function App() {
  const [state, setState] = useState(40)
  const [output, setOutput] = useState([])

  //const [inputCIDR, setInputCIDR] = useState("");
  //const [inputHosts, setInputHosts] = useState("");
  //const [texts, setTexts] = useState({
  //  cidr: '',
  //  hosts: '',
  //})

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
  });
  const refCIDR = useRef(null);
  const refHost = useRef(null);


  //changeAction = value => {
  //  this.setState({action: value},
  //    () => {
  //      console.log(this.state.action); // qui viene stampato il valore corretto
  //    });
  //}

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NetHelper
          </Typography>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                //onClick={handleMenu}
                color="inherit"
              >
              <Store />
          </IconButton>
        </Toolbar>
      </AppBar>


      <Container maxWidth="sm" sx={{p: 4}}>
        <Grid2 container spacing={2}>

          <Grid2 xs={4}>
            <BtnAction 
              val={state} 
              onOutputChange={setOutput} 
              onActionChange={setState} 
              refCIDR={refCIDR}
              //onInputCIDR={setInputCIDR}
              //onInputHosts={setInputHosts} 
              //setTexts={setTexts}
              
              
              />
          </Grid2>

          <Grid2 xs={8}>
              <TxtSanitized 
              val={state} 
              onOutputChange={setOutput} 
              refHost={refHost} 
              setSnackbarState={setSnackbarState}
              ref={refCIDR} // ref to input in TextField to read CIDR value
              />
          </Grid2>

          {
            state == 42 ? 
            (
              <Grid2 item xs={12}>
                <TxtHosts 
                  val={state} 
                  onOutputChange={setOutput} 
                  refCIDR={refCIDR}
                  setSnackbarState={setSnackbarState}
                  ref={refHost} // ref to input in TextField to read host value
                />
              </Grid2>
            ) : (null)
          }


          <Grid2 item xs={12}>
              <ListResults val={state} output={output}/>
          </Grid2>

        </Grid2>
        <SnackbarError state={snackbarState} setState={setSnackbarState}/>
      </Container>


    </Box>


  );

}


