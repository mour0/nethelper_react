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


export default function TxtSanitized({val, onOutputChange}) {

        const [wasmLoaded, setWasmLoaded] = useState(false)


        //const handleValuesChange = useCallback(event => {
        //    onOutputChange(event.target.value)
        //    //console.log(event.target.value)
        //}, [onOutputChange])

        useEffect(() => {
            // on mount
            init().then(() => setWasmLoaded(true));
            //console.log(wasmLoaded)
        }, []);




    // --- FUNCTIONS ---
    const handleCalc = (event) => {
        if (event.target.value.length > 0) 
        {
            switch(val)
            {
                case CALCULATOR_v4:
                {
                    let split = event.target.value.split('/')
                    if (split.length == 2)
                    {
                        try {
                            let output = exp_network(split[0],parse_num(split[1]))
                            onOutputChange(output)
                            console.log(output)
                        }
                        catch (e) {
                            console.log('[handleCalc] - Error 40 - exception')
                        }
                    }
                    else
                    {
                        console.log('[handleCalc] - Error 40')
                    }
                } break

                case MASK_V4:
                {
                    let output = exp_hosts(event.target.value)
                    onOutputChange(output)
                    console.log(output)
                } break

                case VLSM_v4: 
                {

                } break

                case CALCULATOR_v6:
                {
                    let split = event.target.value.split('/')
                    if (split.length == 2)
                    {
                        try {
                            let output = exp_network6(split[0],parse_num(split[1]))
                            onOutputChange(output)
                            console.log(output)

                        }
                        catch (e) {
                            console.log('[handleCalc] - Error 60 - exception')
                        }
                    }
                    else {
                        console.log('[handleCalc] - Error 60')
                    }

                } break

                case MASK_V6:
                {
                    let output = exp_hosts6(event.target.value) //can't fail
                    console.log(output)
                }

            }


        }
        else
        {
            console.log('[handleCalc] - else')

        }
    };

    return (
        <TextField 
            required
            fullWidth 
            pattern="[0-9./]+"
            id="outlined-basic" 
            label="CIDR" 
            variant="outlined"
            inputProps={{ pattern: '[0-9./]*' }}    
            onChange={(e) => {if (wasmLoaded) handleCalc(e)}}
        />
    );
}