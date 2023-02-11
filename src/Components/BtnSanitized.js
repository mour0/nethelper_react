import React from 'react';
import TextField from '@mui/material/TextField';

export default function BtnSanitized() {

        return (
            <TextField 
                required
                fullWidth 
                pattern="[0-9./]+"
                id="outlined-basic" 
                label="CIDR" 
                variant="outlined"
                inputProps={{ pattern: '[0-9./]*' }}    
            />
        );
}