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


const DEFAULT_STATE = Array(6).fill(SYM)

function LineTitleContent({title, output}) {
  return (
    <ListItem>
      <ListItemText sx={{whiteSpace:'pre-line'}} primary={title} secondary={output} />
    </ListItem>
  )
}




function CondRender({val,output}) {
  let temp = (null)

  // check if array 'output' is empty
  //console.log(output.length)
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
        if (output[0] === SYM) {
          return temp;
        }
        temp = (
          <List sx={{maxHeight: 400, overflow: 'auto'}}>
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

export default function ListResults({val,output}) {

    return (
      <CondRender val={val} output={output} />
    );
}