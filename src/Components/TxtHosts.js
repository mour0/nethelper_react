import React, { useState, forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import {exp_vlsm} from 'wasm' // Assume WASM has already been loaded correctly in "TxtSanitized"


function parse_num(n)
{
    if (/[^0-9]+/.test(n))
        return -1
    let temp = parseInt(n,10)
    return isNaN(temp) ? -1 : temp
}



const VLSM_v4 = 42


const TxtHosts = forwardRef(({index, setOutput, refCIDR, setSnackbarState}, ref) => {

    const [temp, setTemp] = useState(false)

    const handleCalc = (event) => {
        const regex = /^[0-9\\,]+$/

        if (event.target.value === "" || regex.test(event.target.value)) {
            console.log('value: ' +event.target.value)
            console.log('inputCIDR: ' + refCIDR.current.value)


            if (event.target.value.length > 0 && refCIDR.current.value.length > 0) 
            {
                if (index === VLSM_v4)
                {
                    let split = refCIDR.current.value.split('/')
                    if (split.length === 2)
                    {
                        try {
                           // console.log(split[0])
                           // console.log(parse_num(split[1]))
                            let output = exp_vlsm(split[0],parse_num(split[1]),event.target.value)
                            console.log(output)
                            setOutput(output)
                        }
                        catch (e)
                        {
                            setSnackbarState({open: true, message: e})
                            setOutput([])

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
            onChange={(e) => { handleCalc(e) }}
            helperText='ex. 20,30,10'
        />
    );
});

export default TxtHosts;