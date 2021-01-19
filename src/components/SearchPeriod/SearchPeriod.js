// Modules
import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { connect } from 'react-redux';

// Styles
import './SearchPeriod.sass';

// Types
import { SET_PERIOD_DATES } from '../../redux/sof/types.js';

// Components
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const SearchPeriod = (props) => {
  const {
      searchFromDatedValue,
      searchToDatedValue,
      xs, md, lg,
      dispatch
  } = props;
  const [dates, setDatesValue] = useState([searchFromDatedValue, searchToDatedValue]);
  const [datesTimestamp, setTimestampDatesValue] = useState([null, moment((new Date()).getTime()).format('X')]);

  useEffect(() => {
    dispatch({
      type: SET_PERIOD_DATES.REQUEST,
      data: {
        fromDate: datesTimestamp === null ? null : datesTimestamp[0],
        toDate: datesTimestamp === null ? null : datesTimestamp[1],
      },
    });
  }, [dates, datesTimestamp])

  /* Convert Dates to  unix epoch time */
  const handleDatesValue = (newDatesValue) => {
    setDatesValue([newDatesValue[0], newDatesValue[1]]);
    console.log(newDatesValue[0]);
    if(newDatesValue[0] && newDatesValue[1]) {
      setTimestampDatesValue([moment(newDatesValue[0]).format('X'), moment(newDatesValue[1]).format('X')]);
    } else if(newDatesValue[0]) {
        setTimestampDatesValue([moment(newDatesValue[0]).format('X'), null]);
      } else if(newDatesValue[1]) {
      setTimestampDatesValue(null, [moment(newDatesValue[1]).format('X')]);
    }
  };

  return (
      <Grid className="SearchPeriod" lg={lg} md={md} xs={xs} item>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDateRangePicker
            startText="From"
            value={dates}
            maxDate={new Date()}
            onChange={(newDatesValue) => {
              handleDatesValue(newDatesValue);
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

const mapStateToProps = (state) => {
  return {
      SOFReducer: state.SOFReducer,
  };
}

SearchPeriod.defaultProps = {
  searchFromDatedValue: null,
  searchToDatedValue: (new Date()).getTime(),
}

export default connect(mapStateToProps)(SearchPeriod)