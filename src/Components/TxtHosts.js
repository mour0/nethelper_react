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


export default function TxtHosts({val, onOutputChange, inputCIDR, inputHosts, onInputHosts, setSnackbarState}) {

        //const [wasmLoaded, setWasmLoaded] = useState(false)
        const [temp, setTemp] = useState(false)

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
        const regex = /^[0-9\,]+$/

        if (event.target.value === "" || regex.test(event.target.value)) {
            console.log('value: ' +event.target.value)
            onInputHosts(event.target.value)
            console.log(inputHosts)


            if (event.target.value.length > 0) 
            {
                if (val === VLSM_v4)
                {
                    let split = inputCIDR.split('/')
                    if (split.length == 2)
                    {
                        try {
                            console.log(split[0])
                            console.log(parse_num(split[1]))
                            console.log(inputHosts)
                            let output = exp_vlsm(split[0],parse_num(split[1]),inputHosts)
                            onOutputChange(output)
                        }
                        catch (e)
                        {
                            setSnackbarState({open: true, message: e})

                        }

                    }
                    setTemp(false)
                }
                // clear textfield
            }
            else
            {
                console.log('[handleCalc] - else')

            }
        }
        else
        {
                setTemp(true)
        }

    };

    return (
        <TextField 
            error={temp}
            required
            fullWidth 
            id="outlined-basic" 
            label="HOSTS" 
            variant="outlined"
            onChange={(e) => {/*if (wasmLoaded)*/ handleCalc(e)}}
            value={inputHosts}
            helperText='ex. 20,30,10'
        />
    );
}