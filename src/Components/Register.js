import React, { useCallback } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Register({ open, setOpen }) {

    const handleClose = () => {
        setOpen(false);
    };

    const handleRegistration = () => {
        
    };

    return (


        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { backgroundColor: 'secondary.main' }}}>
        <DialogTitle>Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sign up, to save the history of generated networks.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRegistration}>Sign up!</Button>
        </DialogActions>
      </Dialog>




    );
}