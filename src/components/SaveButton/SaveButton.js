// Modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

// Styles
import './SaveButton.sass'
import { makeStyles } from '@material-ui/core/styles';

// Types
import { UPDATE_SEARCH_HISTORY } from '../../redux/history/types.js';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const SaveButton = (props) => {
    const classes = useStyles();
    const {
        dispatch,
        SOFReducer: {
            PageSize,
            PeriodDates,
            SOFResult,
            SearchTags,
            SearchText,
            SortBy
        },
        HistoryReducer,

    } = props;

    const [enabled, setDisabled] = useState(false)

    const handleClick = () => {
        // setDisabled(false);
        console.log(props);
        dispatch({
            type: UPDATE_SEARCH_HISTORY.REQUEST,
            data: {
                pageSize: PageSize.data,
                fromDate: PeriodDates.data.fromDate,
                toDate: PeriodDates.data.toDate,
                searchTags: SearchTags.data,
                pageSize: PageSize,
                sortBy: SortBy.data,
                searchText: SearchText.data
            },
        });
    }; 

    useEffect(() => {
        setDisabled(SOFResult.enableSearch);
    }, [SOFResult]);

    useEffect(() => {
        setDisabled(false);
    }, [PageSize, PeriodDates, SearchTags, SortBy]);

    return (
        <div className="SaveButton">
            <Button
              variant="contained"
              color="primary"
              size="medium"
            //   onClick={() => (setDisabled(false))}
              onClick={() => (handleClick())}
            //   disabled={!enabled}
              disabled={false}
              className={classes.button}
              startIcon={<SaveIcon />}>
                Save
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
        HistoryReducer: state.HistoryReducer,
    };
}

export default connect(mapStateToProps)(SaveButton)
