import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShopIcon from '@mui/icons-material/Shop';                

import Grid2 from '@mui/material/Unstable_Grid2';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';


import TxtSanitized from './Components/TxtSanitized';
import BtnAction from './Components/BtnActions'
import ListResults from './Components/ListResults'
import TxtHosts from './Components/TxtHosts';
import SnackbarError from './Components/SnackbarError';
import { color } from '@mui/system';
import { Link } from '@mui/material';



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
          <Typography variant="h6" color='secondary' component="div" sx={{ flexGrow: 1, fontWeight:'bold'}}>
            NetHelper
          </Typography>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                //onClick={handleMenu}
                color="secondary"
              >
              <ShopIcon />
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
              setSnackbarState={setSnackbarState}
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
        <br />
        <Typography variant='h5' color='primary' component='h5'>
          What is this tool?
        </Typography>
        <Typography variant="body1" component="p" gutterBottom paragraph>
          NetHelper is a tool used to simplify the process of manually calculating broadcast addresses, wildcard masks,
          and more.<br />
          It supports IPv4 and IPv6 and shows the results in decimal and binary notation. <br />
          Try also the <Link href="https://play.google.com/store/apps/details?id=com.maur.nethelper">NetHelper App</Link>!
        </Typography>
        <br />
        <Typography variant='h5' color='primary' component='h5'>
          How does it work?
        </Typography>
        <Typography variant="body1" component="p" gutterBottom paragraph>
        NetHelper was made with simplicity in mind. <br />
        Select what you want to calculate, insert a valid CIDR, and NetHelper will handle the rest. <br />
        It might be possible to write an invalid CIDR or to provide too many hosts for subnetting, NetHelper will show you an error indicating that something is wrong!
        </Typography>
        <br />
        <Typography variant='h5' color='primary' component='h5'>
          How is everything calculated?
        </Typography>
        <Typography variant="body1" component="div" gutterBottom paragraph>
          <Typography color='primary' display='inline'>Network Address</Typography> is calculated by doing a bitwise AND between IP address and the subnet mask.
        </Typography>
        <Typography variant="body1" component="div" gutterBottom paragraph>
          <Typography color='primary' display='inline'>Wildcard mask</Typography> is an inverted subnet mask, calculated by doing a bitwise
          NOT of the subnet mask.
        </Typography>
        <Typography variant="body1" component="div" gutterBottom paragraph>
          <Typography color='primary' display='inline'>Broadcast Address</Typography> by doing a bitwise OR between the network address and
          the wildcard mask.
        </Typography>
        <Typography variant="body1" component="div" gutterBottom paragraph>
          <Typography color='primary' display='inline'>First and Last Hosts</Typography> by doing a bitwise OR between the network address and
          the wildcard mask.
        </Typography>
        <Typography variant="body1" component="div" gutterBottom paragraph>
          <Typography color='primary' display='inline'>Network Class</Typography> can either be A, B, C, D, or E. A Network Address can be
          classified by the value of the first octet.
        </Typography>
        <br />
        <Typography variant='h5' color='primary' component='h5'>
          What is VLSM used for?
        </Typography>
        <Typography variant="body1" component="p" gutterBottom paragraph>
        When you have to divide a network into multiple subnets, you can use VLSM to divide the network. <br />
        Usually, you will be provided with a Network Address, a Subnet Mask, and some smaller networks with their required hosts. <br />
        To manually subnet a network you must consider that 2 addresses are reserved for the network address and broadcast address or that you must start subnetting from the network with the highest amount of hosts to avoid overlapping networks. <br />
        NetHelper will consider all of this and will automatically subnet your network, just by providing a CIDR and a list of networks with their hosts.
        </Typography>


      </Container>


    </Box>


  );

}


