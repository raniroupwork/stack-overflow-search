// Modules
import React, { useState } from 'react';

// Styles
import './SortBy.sass';

// Components
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const SortBy = () => {
    const pagination = ['Activity', 'Creation', 'Relevance', 'Votes'];
    const [sortBy, setSortBy] = useState('Activity');

    return (
        <Grid lg={2} md={2} xs={4} item>
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

export default SortBy;