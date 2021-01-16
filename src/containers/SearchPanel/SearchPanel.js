// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Styles
import './SearchPanel.sass';

// Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchInput from '../../components/SearchInput/SearchInput.js'
import PageSize from '../../components/PageSize/PageSize.js'
import SearchTags from '../../components/SearchTags/SearchTags.js'
import SortBy from '../../components/SortBy/SortBy.js'
import SearchPeriod from '../../components/SearchPeriod/SearchPeriod.js'

// Types
import { FETCH_SOF_SEARCH } from '../../redux/sof/types.js';

const SearchPanel = (props) => {
    const {
        dispatch,
        SOFReducer: {
            SOFResult: {
                data,
                isLoading,
                error,
            }
        }
    } = props;

    useEffect(() => {
        dispatch({
            type: FETCH_SOF_SEARCH.REQUEST,
            data: {
                currentPage: 1,
                pageSize: 10,
                sortType: 'votes',
                searchText: 'react node'
            },
        });
    }, [])
    
    
    return (
        <section className="SearchPanel">
                <Paper className="SearchPanel__paper" elevation={3}>
                    <Grid container spacing={2} >
                        <SearchInput></SearchInput>
                        <PageSize></PageSize>
                        <SortBy></SortBy>
                        <SearchTags></SearchTags>
                        <SearchPeriod></SearchPeriod>
                    </Grid>
                </Paper>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
    };
}

export default connect(mapStateToProps)(SearchPanel);
