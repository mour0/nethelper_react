import * as React from 'react';
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


import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const opts = [
  {
    value: 'v4Calc',
    label: 'IPv4',
  },
  {
    value: 'v4Mask',
    label: 'IPv4 Mask',
  },
  {
    value: 'v4VLMS',
    label: 'VLMS',
  },
  {
    value: 'v6Calc',
    label: 'IPv6',
  },
  {
    value: 'v6Mask',
    label: 'IPv6 Mask',
  }
];

function App() {
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
          <TextField fullWidth
            id="outlined-select-action"
            select
            label="Select Action"
            defaultValue="v4Calc"
            //helperText="Please select your action"
          >
            {opts.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid2>

        <Grid2 xs={8}>
          <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid2>

      </Grid2>
      </Container>



    </Box>


  );
}

export default App;

