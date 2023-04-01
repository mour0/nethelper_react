import Snackbar from '@mui/material/Snackbar';


export default function SnackbarError({ state, setState }) {

    const pos = { vertical: 'top', horizontal: 'center' };
    const dur_hide = 1000;

    const {open, message} = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };


    return (
      <Snackbar
        anchorOrigin={pos}
        open={open}
        autoHideDuration={dur_hide}
        onClose={handleClose}
        message={message}
        action={null}
      />
    );

}