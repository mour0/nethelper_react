import React, { useCallback } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



export default function BtnActions({val, onOutputChange, onActionChange, onInputCIDR, onInputHosts}) {

    const handleActionChange = useCallback(event => {
        onActionChange(event.target.value)
        onOutputChange("")
        onInputCIDR("")
        onInputHosts("")
        console.log(event.target.value)
        
    }, [onActionChange])


    return (

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Action</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="select-action"
            value={val}
            label="Action"
            onChange={handleActionChange}
            >

            <MenuItem value={40}>IPv4</MenuItem>
            <MenuItem value={41}>IPv4 Mask</MenuItem>
            <MenuItem value={42}>VLMS</MenuItem>
            <MenuItem value={60}>IPv6</MenuItem>
            <MenuItem value={61}>IPv6 Mask</MenuItem>


            </Select>
        </FormControl>






    )

}

