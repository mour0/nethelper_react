import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import init, {exp_network,exp_hosts,exp_network6,exp_hosts6,exp_vlsm} from 'wasm'
//await init()


function parse_num(n)
{
    if (/[^0-9]+/.test(n))
        return -1
    let temp = parseInt(n,10)
    return isNaN(temp) ? -1 : temp
}


// create a function named initCalc that prints the length of the input

// create a function named 'yoo' that prints the length of the input and receive as param the props val

const CALCULATOR_v4 = 40
const MASK_V4 = 41
const VLSM_v4 = 42
const CALCULATOR_v6 = 40
const MASK_V6 = 61


export default function TxtHosts({val, onOutputChange}) {

        //const [wasmLoaded, setWasmLoaded] = useState(false)
        const [host, setHost] = useState("")


        //const handleValuesChange = useCallback(event => {
        //    onOutputChange(event.target.value)
        //    //console.log(event.target.value)
        //}, [onOutputChange])

        // on change of 'val' clear textfield


        //useEffect(() => {
        //    // on mount
        //    init().then(() => setWasmLoaded(true));
        //    //console.log(wasmLoaded)
        //}, []);



    // --- FUNCTIONS ---
    const handleCalc = (event) => {
        // regex for the following string "3,4,5" and must start and end with a number
        const regex = /^[0-9\,]+$/

        if (event.target.value === "" || regex.test(event.target.value)) {
            setHost(event.target.value)


            if (event.target.value.length > 0) 
            {
                switch(val)
                {
                    case VLSM_v4: 
                    {
                        exp_vlsm(event.target.value)
                        console.log("can calculate")
                    } break

                }

                // clear textfield
            }
            else
            {
                console.log('[handleCalc] - else')

            }



        }

    };

    return (
        <TextField 
            required
            fullWidth 
            pattern="[0-9./]+"
            id="outlined-basic" 
            label="HOSTS" 
            variant="outlined"
            inputProps={{ pattern: '[0-9./]*' }}    
            onChange={(e) => {/*if (wasmLoaded)*/ handleCalc(e)}}
            value={host}
        />
    );
}