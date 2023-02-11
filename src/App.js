import { useState } from 'react';
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


import BtnSanitized from './Components/BtnSanitized';
import BtnAction from './Components/BtnActions'
import ListResults from './Components/ListResults'


export default function App() {
  const [state, setState] = useState(40)

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
          <BtnAction val={state} onActionChange={setState} />
        </Grid2>

        <Grid2 xs={8}>
            <BtnSanitized />
        </Grid2>

        <Grid2 xs={12}>
            <ListResults />
        </Grid2>

      </Grid2>
      </Container>



    </Box>


  );

}


