import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { auth } from '../firebase';

const SYM = '-'
const STR_NETWORK = 'Network'
const STR_MASK = 'Subnet Mask'
const STR_BROADCAST = 'Broadcast'
const STR_WILDCARD = 'Wildcard'
const STR_FIRSTHOST = 'First Host'
const STR_LASTHOST = 'Last Host'
const STR_SLASHNOTATION = 'Slash Notation'
const STR_AVAIABLEADDR = 'Available Addresses'
const STR_RANGESTART = 'Range Start'
const STR_RANGEEND = 'Range End'


const DEFAULT_STATE = Array(6).fill(SYM)

function LineTitleContent({ title, output }) {
  return (
    <ListItem>
      <ListItemText sx={{ whiteSpace: 'pre-line' }} primary={title} secondary={output} />
    </ListItem>
  )
}




function CondRender({ index, output }) {
  let temp = (null)

  // check if array 'output' is empty
  //console.log(output.length)
  if (output.length === 0) {
    output = DEFAULT_STATE
  }

  switch (index) {
    case 40:
      temp = (
        <List>
          <LineTitleContent title={STR_NETWORK} output={output[0]} />
          <LineTitleContent title={STR_MASK} output={output[1]} />
          <LineTitleContent title={STR_WILDCARD} output={output[2]} />
          <LineTitleContent title={STR_BROADCAST} output={output[3]} />
          <LineTitleContent title={STR_FIRSTHOST} output={output[4]} />
          <LineTitleContent title={STR_LASTHOST} output={output[5]} />
        </List>
      )
      break
    case 41:
      temp = (
        <List>
          <LineTitleContent title={STR_MASK} output={output[0]} />
          <LineTitleContent title={STR_WILDCARD} output={output[1]} />
          <LineTitleContent title={STR_SLASHNOTATION} output={output[2]} />
          <LineTitleContent title={STR_AVAIABLEADDR} output={output[3]} />
        </List>
      )
      break
    case 42:
      if (output[0] === SYM) {
        return temp;
      }
      temp = (
        <List sx={{ maxHeight: 400, overflow: 'auto' }}>
          {
            output.map((el, index) => {
              //console.log(el)
              return (
                <LineTitleContent key={index} title={index} output={el} />
              )
            })
          }
        </List>
      )
      //let a = output.map((el, index) => { return (
      //  <ListItem key={index}>
      //    <ListItemText sx={{whiteSpace:'pre-line'}} primary={index} secondary={el} />
      //  </ListItem>
      //)})
      //temp = (
      //  <List>
      //    {a}
      //  </List>
      //)
      break
    case 60:
      temp = (
        <List>
          <LineTitleContent title={STR_NETWORK} output={output[0]} />
          <LineTitleContent title={STR_MASK} output={output[1]} />
          <LineTitleContent title={STR_WILDCARD} output={output[2]} />
          <LineTitleContent title={STR_RANGESTART} output={output[3]} />
          <LineTitleContent title={STR_RANGEEND} output={output[4]} />
        </List>
      )
      break
    case 61:
      temp = (
        <List>
          <LineTitleContent title={STR_MASK} output={output[0]} />
          <LineTitleContent title={STR_WILDCARD} output={output[1]} />
          <LineTitleContent title={STR_SLASHNOTATION} output={output[2]} />
          <LineTitleContent title={STR_AVAIABLEADDR} output={output[3]} />
        </List>
      )
      break
    default:
      break
  }
  return temp
}




export default function ListResults({ svg, setSVG, index, output, setSnackbarState }) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {


    // URL + ENDPOINT
    const URL = 'http://localhost:3001/ipv4'
    
    if (output.length === 0)
    {
      setSnackbarState({open: true, message: 'No generated content'})
      return
    }

    let n_split = output[0].split(' ')
    let br_split = output[3].split('\n')
    let n = n_split[0]
    let br = br_split[0]
    let h0_temp = n.split('.')
    let h0 = h0_temp[0] + '.' + h0_temp[1] + '.' + h0_temp[2] + '.' + (parseInt(h0_temp[3]) + 1)

    let h1_temp = br.split('.')
    let r = h1_temp[0] + '.' + h1_temp[1] + '.' + h1_temp[2] + '.' + (parseInt(h1_temp[3]) - 1)
    let h1 = h1_temp[0] + '.' + h1_temp[1] + '.' + h1_temp[2] + '.' + (parseInt(h1_temp[3]) - 2)
    //let r = '192.168.1.254'
    //let h0 = '192.168.1.1'
    //let h1 = '192.168.1.253'
    //let br = '192.168.1.254'

    let query = `?n=${n}&r=${r}&h0=${h0}&h1=${h1}&br=${br}`
    let user = auth.currentUser;
    if (user) {
      query = query.concat(`&email=${user.email}`)
    }
    setLoading(true)
    fetch(URL + query)
      .then((response) => response.text())
      .then((data) => setSVG(data))
      .catch(() => { 
        setSnackbarState({open: true, message: 'Failed generating image'})
        setSVG("") 
      })
      .finally(() => setLoading(false))

  }

  return (
    <>
      <CondRender index={index} output={output} />

      {
        index === 40 ?
          (
            <>
              <Button variant="contained" onClick={handleClick} sx={{mb: 2}} fullWidth>Generate example</Button>
              <Container maxWidth="sm">
                { 
                  loading ?
                  <Box display='flex' justifyContent='center'>
                    <CircularProgress color='primary'/>
                  </ Box>
                  : <div dangerouslySetInnerHTML={{ __html: svg }} />
                }
              </Container>
            </>
          ) : (null)
      }

    </>

  );


}