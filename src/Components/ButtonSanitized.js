import React from 'react';
import TextField from '@mui/material/TextField';

class ButtonSanitized extends React.Component {

    // create a react componenets that has a inside state with the regex to accepts only ipv4
    // and a function to validate the input
    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        regex: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    //    };
    //    this.validate = this.validate.bind(this);
    //}

    render() {
        return (
            <TextField 
                error
                fullWidth 
                id="outlined-basic" 
                label="CIDR" 
                variant="outlined"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}    
            />
        );
    }

}

export default ButtonSanitized;