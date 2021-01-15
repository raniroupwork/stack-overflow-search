// Modules
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// Styles
import './SearchPanel.sass';

// Components
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

// Icons
import SearchIcon from '@material-ui/icons/Search';

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
    const pagination = [5, 10, 15, 20, 25];
    const [searchText, setSearchText] = useState('');
    const [pageSize, setPageSize] = useState('5');

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
                    <Grid container >
                        <Grid className="SearchPanel__search-form" xs={3} item>
                            <InputLabel className="SearchPanel__input-label" shrink>Stack Overflow questions</InputLabel>
                            <FormControl variant="outlined">
                                    <InputLabel htmlFor="search-text-input">Search</InputLabel>
                                    <OutlinedInput
                                        id="search-text-input"
                                        type={'text'}
                                        placeholder="Search Stack Overflow"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="Search submit"
                                                onClick={(e) => setSearchText(e.target.value)}
                                                edge="end"
                                                >
                                                    <SearchIcon/>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                            </FormControl>
                        </Grid>
                        <Grid xs={2} item>
                        <InputLabel className="SearchPanel__input-label" shrink id="number-item-per-page-select">
                          Answers/Pages
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            variant="outlined"
                            displayEmpty
                            value={pageSize}
                            onChange={(e) => setPageSize(e.target.value)}>>
                                {pagination.map((value, index) => (
                                <MenuItem value={value} key={index}>{value}</MenuItem>
                                ))}
                        </Select>
                        </Grid>
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
