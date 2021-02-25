import React, {useEffect} from 'react'

import {Snackbar} from '@material-ui/core'

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SnackbarFileError({display, setDisplay}) {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setDisplay(false);
    };

    return (
        <Snackbar
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
            open={display}
            autoHideDuration={6000}
            onClose={handleClose}
            >
            <Alert severity="error">Please ensure the correct file type is selected.</Alert>
        </Snackbar>
    )
}

export default SnackbarFileError
