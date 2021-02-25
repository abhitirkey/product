import React, {useEffect} from 'react'
import useStorage from 'Hooks/useStorage'

import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" color='inherit' size={"4rem"} thickness={5} {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography component="div" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired
  };

function UploadProgressBar({ file, setFile }) {

    const {url, progress} = useStorage(file);
    console.log(progress, url)

    useEffect(() => {
      if(url)
        setFile(null)
    }, [url])

    return (
        <>
        <div className="uploadProgressContainer">
            <div className="uploadingText smallText fadeInAndOut">Uploading...</div>
            <div className="ProgressPercentage"><CircularProgressWithLabel value={Math.floor(progress)} /></div>
        </div>
        </>
        
    )
}

export default UploadProgressBar
