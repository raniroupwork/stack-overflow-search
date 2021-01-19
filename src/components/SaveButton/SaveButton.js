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
        historyReducer,

    } = props;

    const classes = useStyles();
    const [enabled, setDisabled] = useState(false)

    const handleClick = () => {
        dispatch({
            type: UPDATE_SEARCH_HISTORY.REQUEST,
            data: {
                pageSize: PageSize.data,
                fromDate: PeriodDates.data.fromDate,
                toDate: PeriodDates.data.toDate,
                searchTags: SearchTags.data,
                pageSize: PageSize.data,
                sortBy: SortBy.data,
                searchText: SearchText.data,
            },
        });
        setDisabled(false);
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
              onClick={() => (handleClick())}
              disabled={!enabled}
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
        historyReducer: state.historyReducer,
    };
}

export default connect(mapStateToProps)(SaveButton)
