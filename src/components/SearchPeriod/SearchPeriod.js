// Modules
import React, { useState, useEffect } from 'react';
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
  const [dates, setDatesValue] = useState([null, (new Date()).getTime()]);
  const [datesTimestamp, setTimestampDatesValue] = useState([null, null]);

  const {
      dispatch,
      SOFReducer: {
          PeriodDates: {
            data
          }
      }
  } = props;

  useEffect(() => {
      dispatch({
          type: SET_PERIOD_DATES.REQUEST,
          data: {
            fromDate: datesTimestamp[0],
            toDate: datesTimestamp[1],
          },
      });
  }, [dates])

  const handleDatesValue = (newDatesValue) => {
    setDatesValue([newDatesValue[0], newDatesValue[1]]);
    if(newDatesValue[0] && newDatesValue[1]) {
      const dateFromTimestamp = ((newDatesValue[0].getTime() + newDatesValue[0].getTimezoneOffset()*60*1000)/1000).toFixed(0);
      const dateToTimestamp = ((newDatesValue[1].getTime() + newDatesValue[1].getTimezoneOffset()*60*1000)/1000).toFixed(0);
      setTimestampDatesValue([dateFromTimestamp, dateToTimestamp])
      // console.log(new Date(datesTimestamp[0] * 1000));
      // console.log(new Date(datesTimestamp[1] * 1000));
    }
  };

  return (
      <Grid className="SearchPeriod" lg={3} md={3} xs={12} item>
      {/* <h1>{datesTimestamp[0]} --- {datesTimestamp[1]}</h1> */}
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

export default connect(mapStateToProps)(SearchPeriod)