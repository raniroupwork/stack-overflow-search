// Modules
import React, { useState } from 'react';

// Styles
import './PageSize.sass';

// Components
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const PageSize = () => {
    const pagination = [5, 10, 15, 20, 25];
    const [pageSize, setPageSize] = useState('5');

    return (
        <Grid lg={1} md={1} xs={6} item>
            <InputLabel className="PageSize__input-label" shrink id="number-item-per-page-select">
            Answers/Page
            </InputLabel>
            <Select
                labelId="demo-simple-select-placeholder-label-label"
                variant="outlined"
                displayEmpty
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}>
                    {pagination.map((value, index) => (
                    <MenuItem value={value} key={index}>{value}</MenuItem>
                    ))}
            </Select>
        </Grid>
    );
};

export default PageSize;
