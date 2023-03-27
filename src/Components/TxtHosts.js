import React, { useState, useEffect, forwardRef } from 'react';
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



const CALCULATOR_v4 = 40
const MASK_V4 = 41
const VLSM_v4 = 42
const CALCULATOR_v6 = 40
const MASK_V6 = 61


const TxtHosts = forwardRef(({val, onOutputChange, refCIDR, setSnackbarState}, ref) => {

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
            //setTexts({...texts, hosts: event.target.value})
            console.log('inputCIDR: ' + refCIDR.current.value)


            if (event.target.value.length > 0 && refCIDR.current.value.length > 0) 
            {
                if (val === VLSM_v4)
                {
                    let split = refCIDR.current.value.split('/')
                    if (split.length == 2)
                    {
                        try {
                           // console.log(split[0])
                           // console.log(parse_num(split[1]))
                            let output = exp_vlsm(split[0],parse_num(split[1]),event.target.value)
                            console.log(output)
                            onOutputChange(output)
                        }
                        catch (e)
                        {
                            setSnackbarState({open: true, message: e})
                            onOutputChange([])

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
            inputRef={ref}
            error={temp}
            required
            fullWidth 
            id="outlined-basic" 
            label="HOSTS" 
            variant="outlined"
            onChange={(e) => {/*if (wasmLoaded)*/ handleCalc(e)}}
            //value={texts['hosts']}
            helperText='ex. 20,30,10'
        />
    );
});

export default TxtHosts;