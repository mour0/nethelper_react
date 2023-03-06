import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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



const DEFAULT_STATE = ['-','-','-','-','-','-']

function LineTitleContent({title,output}) {
  return (
    <ListItem>
      <ListItemText primary={title} secondary={output} />
    </ListItem>
  )
}




function CondRender({val,output}) {
  let temp = (<ListItem></ListItem>)
  // check if array 'output' is empty
  if (output.length === 0) {
    output = DEFAULT_STATE
  }

  switch (val) 
  {
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
        temp = (
          <List>
            TODO
          </List>

        )
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

export default function ListResults({val,output}) {

    //const handleActionChange = useCallback(event => {
    //    onActionChange(event.target.value)
    //    //console.log(event.target.value)
    //}, [onActionChange])
    const [values, setValues] = useState([])
    //console.log("out:" + output)

    return (
      <CondRender val={val} output={output} />
    );
}