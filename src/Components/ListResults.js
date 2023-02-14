import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SYM = '-'
const STR_IPV4 = 'IPv4'


function CondRender({val}) {
  let temp = (<ListItem></ListItem>)
  switch (val) 
  {
    case 40:
        temp = (
          <List>
            <ListItem>
              <ListItemText primary={STR_IPV4} secondary={SYM} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Subnet Mask" secondary='-' />
            </ListItem>
            <ListItem>
              <ListItemText primary="Broadcast" secondary='-' />
            </ListItem>
            <ListItem>
              <ListItemText primary="Wildcard" secondary='-' />
            </ListItem>
            <ListItem>
              <ListItemText primary="First Host" secondary='-' />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Host" secondary='-' />
            </ListItem>
          </List>
        )
        break
    case 41:
        temp = (
        <ListItem>
          <ListItemText primary="Subnet Mask" secondary='-' />
          <ListItemText primary="Wildcard" secondary='-' />
          <ListItemText primary="Slash Notation" secondary='-' />
          <ListItemText primary="Avaible Addresses" secondary='-' />
        </ListItem>
        )
        break
    case 42:
        temp = (
          <ListItem>

          </ListItem> 
        )
        break
    case 60:
          temp = (
            <ListItem>
              <ListItemText primary="Network" secondary='-' />
              <ListItemText primary="Subnet Mask" secondary='-' />
              <ListItemText primary="Wildcard" secondary='-' />
              <ListItemText primary="Range Start" secondary='-' />
              <ListItemText primary="Range End" secondary='-' />
            </ListItem>
          )
          break
    case 61:
          temp = (
            <ListItem>
              <ListItemText primary="Subnet Mask" secondary='-' />
              <ListItemText primary="Wildcard" secondary='-' />
              <ListItemText primary="Slash Notation" secondary='-' />
              <ListItemText primary="Avaible Addresses" secondary='-' />
            </ListItem>
          )
          break
    default:
        temp = (
          <ListItem>

          </ListItem>
        )
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
    console.log("out:" + output)

    return (
      <CondRender val={val} />
    );
}