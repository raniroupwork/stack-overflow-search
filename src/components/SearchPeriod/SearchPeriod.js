// Modules
import React, { useState } from 'react';
// Styles
import './SearchPeriod.sass';

// Components
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const SearchPeriod = () => {
  const [value, setValue] = useState([null, new Date()]);

    return (
        <Grid className="SearchPeriod" lg={3} md={3} xs={12} item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDateRangePicker
              startText="From"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} variant="standard" />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} variant="standard" />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </Grid>
    );
};

export default SearchPeriod;