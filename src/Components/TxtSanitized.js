import React from 'react';
import TextField from '@mui/material/TextField';
import {exp_network,exp_hosts,exp_network6,exp_hosts6,exp_vlsm} from 'wasm'
//await init()


function parse_num(n)
{
    if (/[^0-9]+/.test(n))
        return -1
    let temp = parseInt(n,10)
    return isNaN(temp) ? -1 : temp
}

// create a function named initCalc that prints the length of the input
function initCalc(event,val) {
    if (event.target.value.length > 0) {
        switch(val) {
            case 40: 
            {
                let split = event.target.value.split('/')
                if (split.length == 2)
                {
                    try {
                        console.log(split[0])
                        console.log(parse_num(split[1]))
                        let output = exp_network(split[0],parse_num(split[1]))
                        console.log(output)
                    }
                    catch (e) {
                        console.log('error 40 - Expection')
                    }
                }
                else
                {
                    console.log('error 40')
                }
            }
            break
        }
        

    }
}

// create a function named 'yoo' that prints the length of the input and receive as param the props val


export default function TxtSanitized({val}) {

        return (
            <TextField 
                required
                fullWidth 
                pattern="[0-9./]+"
                id="outlined-basic" 
                label="CIDR" 
                variant="outlined"
                inputProps={{ pattern: '[0-9./]*' }}    
                onChange={(e) => initCalc(e,val)}
            />
        );
}