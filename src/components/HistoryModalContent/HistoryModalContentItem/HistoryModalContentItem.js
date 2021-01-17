// Modules
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Styles
import "./HistoryModalContentItem.sass"

// Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PageSize from '../../../components/PageSize/PageSize.js'
import SearchTags from '../../../components/SearchTags/SearchTags.js'
import SortBy from '../../../components/SortBy/SortBy.js'
import SearchPeriod from '../../../components/SearchPeriod/SearchPeriod.js'

// Icons
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/History';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const HistoryModalContentItem = () => {
    const classes = useStyles();

    const [historyData, setHistoryData] = useState([]);
    const [edit, setEditFilters] = useState([false]);

    return (
        <Paper className={`HistoryModalContentItem__paper ${edit ? "" : "HistoryModalContentItem__paper--disable"}`} variant="outlined" elevation={0}>
            <div className="HistoryModalContentItem__header">
                <div className="HistoryModalContentItem__header-text">
                    <HistoryIcon/>
                    <h4>Search for: </h4>
                    <p>"Old search result text here..."</p>
                </div>
                <div className="HistoryModalContentItem__header-options">
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button, "HistoryModalContentItem__delete"}
                      size="small"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button, "HistoryModalContentItem__search"}
                      size="small"
                      endIcon={<SearchIcon />}
                    >
                      Search
                    </Button>
                </div>
            </div>
            <Grid className={`HistoryModalContentItem__filters ${edit ? "" : "HistoryModalContentItem__filters--disable"}`} container spacing={3}>
                <PageSize xs={6} md={1} lg={1}/>
                <SortBy xs={6} md={3} lg={3}/>
                <SearchTags xs={12} md={4} lg={4}/>
                <SearchPeriod xs={12} md={4} lg={4}/>
            </Grid>
                <div className="HistoryModalContentItem__edit">
                    <EditIcon style={{ color: "#151515", fontSize: 18 }}/>
                </div>
        </Paper>
    )
}

export default HistoryModalContentItem