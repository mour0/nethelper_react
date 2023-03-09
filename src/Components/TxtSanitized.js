import React, { useState, useEffect, useRef, forwardRef } from 'react';
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


const HELPER_V4 = 'ex. 192.168.1.1/24'
const HELPER_MASK4 = 'ex. 24'
const HELPER_VLSM4 = 'ex. 192.168.1.1/[1-30]'
const HELPER_V6 = 'ex. 2001:db8:85a3::8a2e:370:7334/64'
const HELPER_MASK6 = '64'

const TxtSanitized = forwardRef(({val, onOutputChange, refHost,setSnackbarState},ref) => {

        const [wasmLoaded, setWasmLoaded] = useState(false)


        //const handleValuesChange = useCallback(event => {
        //    onOutputChange(event.target.value)
        //    //console.log(event.target.value)
        //}, [onOutputChange])

        // on change of 'val' clear textfield


        useEffect(() => {
            // on mount
            init().then(() => setWasmLoaded(true));
            //console.log(wasmLoaded)
        }, []);




    // --- FUNCTIONS ---
    const handleCalc = (event) => {
        // TODO regex
        //onInputCIDR(event.target.value)


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
                            //console.log(output)
                            setSnackbarState({open: false, message: ''})
                        }
                        catch (e) {
                            setSnackbarState({open: true, message: e})
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
                    //try {
                        let output = exp_hosts(event.target.value)
                        //console.log(output)
                        onOutputChange(output)
                    //    setSnackbarState({open: false, message: ''})
                    //}
                    //catch (e) {
                    //    setSnackbarState({open: true, message: e})
                    //}

                } break

                case VLSM_v4: 
                {
                    // if inputhosts respect regex -> calculate and is not empty
                    //console.log('refHost: ' +refHost.current.value)
                    let split = event.target.value.split('/');
                    if (refHost.current.value.length > 0 && split.length == 2)
                    {
                        try {
                            let output = exp_vlsm(split[0], parse_num(split[1]),refHost.current.value)
                            onOutputChange(output)
                            //console.log(output)
                            setSnackbarState({open: false, message: ''})
                        }
                        catch (e) {
                            setSnackbarState({open: true, message: e})
                            //console.log('[handleCalc] - Error 42 - exception')
                        }
                    }

                } break

                case CALCULATOR_v6:
                {
                    let split = event.target.value.split('/')
                    if (split.length == 2)
                    {
                        try {
                            let output = exp_network6(split[0],parse_num(split[1]))
                            onOutputChange(output)
                            //console.log(output)
                            setSnackbarState({open: false, message: ''})

                        }
                        catch (e) {
                            setSnackbarState({open: true, message: e})
                            console.log('[handleCalc] - Error 60 - exception')
                        }
                    }
                    else {
                        console.log('[handleCalc] - Error 60')
                    }

                } break

                case MASK_V6:
                {
                    let output = exp_hosts6(event.target.value)
                    onOutputChange(output)
                    //setSnackbarState({open: true, message: e})
                    console.log(output)
                }

            }


            // clear textfield
        }
        else
        {
            console.log('[handleCalc] - else')

        }
    };

    return (
        <TextField 
            inputRef={ref}
            required
            fullWidth 
            pattern="[0-9./]+"
            id="outlined-basic" 
            label="CIDR" 
            variant="outlined"
            inputProps={{ pattern: '[0-9./]*' }}    
            onChange={(e) => {if (wasmLoaded) handleCalc(e)}}
            helperText={setHelper(val)}
            //value={inputCIDR}
        />
    );
});


function setHelper(val)
{
    switch (val)
    {
        case CALCULATOR_v4:
            return HELPER_V4
        case MASK_V4:
            return HELPER_MASK4
        case VLSM_v4:
            return HELPER_VLSM4
        case CALCULATOR_v6:
            return HELPER_V6
        case MASK_V6:
            return HELPER_MASK6
        default:
            return 'Helper error'
    }

}

export default TxtSanitized;