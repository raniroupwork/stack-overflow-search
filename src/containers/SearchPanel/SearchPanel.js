// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Styles
import './SearchPanel.sass';

// Components
import PageSize from '../../components/PageSize/PageSize.js'
import SearchInput from '../../components/SearchInput/SearchInput.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
