// Modules
import React from 'react';

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
import SaveButton from '../../components/SaveButton/SaveButton.js'

const SearchPanel = () => {

    return (
        <section className="SearchPanel">
                <Paper className="SearchPanel__paper" elevation={3}>
                    <Grid container spacing={2} >
                        <SearchInput xs={12} md={4} lg={3}></SearchInput>
                        <PageSize xs={6} md={1} lg={1}></PageSize>
                        <SortBy xs={6} md={3} lg={2}></SortBy>
                        <SearchTags xs={12} md={3} lg={3}></SearchTags>
                        <SearchPeriod xs={12} md={3} lg={3}></SearchPeriod>
                    </Grid>
                </Paper>
                <SaveButton></SaveButton>
        </section>
    );
};

export default SearchPanel;
