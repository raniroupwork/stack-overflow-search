// Modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './PageSize.sass';

// Components
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

// Types
import { SET_PAGE_SIZE } from '../../redux/sof/types.js';

const PageSize = (props) => {
    const {
        pageSizeValue,
        xs, md, lg,
        dispatch,
    } = props;
    const pagination = [5, 10, 15, 20, 25];
    const [pageSize, setPageSize] = useState(pageSizeValue);

    useEffect(() => {
        dispatch({
            type: SET_PAGE_SIZE.REQUEST,
            data: {
                pageSize
            },
        });
    }, [pageSize])

    return (
        <Grid lg={lg} md={md} xs={xs} item className="PageSize">
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

PageSize.defaultProps = {
    pageSizeValue: 5,
}

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
    };
}

export default connect(mapStateToProps)(PageSize)