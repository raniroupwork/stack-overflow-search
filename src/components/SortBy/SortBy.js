// Modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './SortBy.sass';

// Types
import { SET_SORT_BY } from '../../redux/sof/types.js';

// Components
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const SortBy = (props) => {
    const pagination = ['Activity', 'Creation', 'Relevance', 'Votes'];
    const [sortBy, setSortBy] = useState('Activity');
    const {
        xs, md, lg,
        dispatch,
        SOFReducer: {
            SortBy: {
                data,
            },
        }
    } = props;

    useEffect(() => {
        dispatch({
            type: SET_SORT_BY.REQUEST,
            data: {
                sortBy
            },
        });
    }, [sortBy])

    return (
        <Grid className="SortBy" lg={lg} md={md} xs={xs} item>
            <InputLabel className="SortBy__input-label" shrink id="sort-by-select">
            Sort By
            </InputLabel>
            <Select
                labelId="sort-by-select"
                variant="outlined"
                displayEmpty={false}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}>
                    {pagination.map((value, index) => (
                    <MenuItem value={value} key={index}>{value}</MenuItem>
                    ))}
            </Select>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
    };
}

export default connect(mapStateToProps)(SortBy)