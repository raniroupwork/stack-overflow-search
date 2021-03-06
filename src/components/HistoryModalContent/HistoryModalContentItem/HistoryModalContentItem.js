// Modules
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Styles
import "./HistoryModalContentItem.sass"
import { makeStyles } from '@material-ui/core/styles';

// Types
import { DELETE_SEARCH_HISTORY } from '../../../redux/history/types.js';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/History';
import DeleteIcon from '@material-ui/icons/Delete';

// Components
import SearchPeriod from '../../../components/SearchPeriod/SearchPeriod.js'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PageSize from '../../../components/PageSize/PageSize.js'
import SearchTags from '../../../components/SearchTags/SearchTags.js'
import SortBy from '../../../components/SortBy/SortBy.js'
import Grid from '@material-ui/core/Grid';



const HistoryModalContentItem = (props) => {
    const {
      dispatch,
      data,
      index,
    } = props;

    const [historyData, setHistoryData] = useState([]);
    const [edit, setEditFilters] = useState([false]);

    const useStyles = makeStyles((theme) => ({
      button: {
        margin: theme.spacing(1),
      },
    }));
    const classes = useStyles();

    const deleteItem = (index) => {
      dispatch({
          type: DELETE_SEARCH_HISTORY.REQUEST,
          data: {
              itemIndex: index,
          },
      });
      alert('Remove item ' + index + ' from DB...');
    };
    
    const searchAgain = () => {
      alert('Search again...');
    }

    useEffect(() => {
      setEditFilters(false);
    }, [])

    return (
        <Paper className={`HistoryModalContentItem__paper ${edit ? "" : "HistoryModalContentItem__paper--disable"}`} variant="outlined" elevation={0}>
            <div className="HistoryModalContentItem__header">
                <div className="HistoryModalContentItem__header-text">
                    <HistoryIcon/>
                    <h4>Search for: </h4>
                    <p>"{data.searchText}" - at {moment(new Date()).format('MMMM DD, YYYY - HH:mm')}</p>
                </div>
                <div className="HistoryModalContentItem__header-options">
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button, "HistoryModalContentItem__delete"}
                      size="small"
                      onClick={() => deleteItem(index)}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button, "HistoryModalContentItem__search"}
                      size="small"
                      onClick={() => searchAgain()}
                      endIcon={<SearchIcon />}
                    >
                      Search
                    </Button>
                </div>
            </div>
            <Grid className={`HistoryModalContentItem__filters ${edit ? "" : "HistoryModalContentItem__filters--disable"}`} container spacing={3}>
                <PageSize pageSizeValue={data.pageSize} xs={6} md={1} lg={1}/>
                <SortBy sortByValue={data.sortBy} xs={6} md={3} lg={3}/>
                <SearchTags searchTagsValue={data.searchTags} xs={12} md={4} lg={4}/>
                <SearchPeriod searchFromDatedValue={new Date(data.fromDate * 1000)} searchToDatedValue={new Date(data.toDate * 1000)} xs={12} md={4} lg={4}/>
            </Grid>
                <div className="HistoryModalContentItem__edit" onClick={()=>(setEditFilters(!edit))}>
                    <EditIcon style={{ color: "#151515", fontSize: 18 }}/>
                </div>
        </Paper>
    )
}

const mapStateToProps = (state) => {
  return {
      historyReducer: state.historyReducer,
  };
}

export default connect(mapStateToProps)(HistoryModalContentItem)