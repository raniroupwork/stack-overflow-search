// Modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './SearchInput.sass'

// Types
import { SET_SEARCH_TEXT, FETCH_SOF_SEARCH } from '../../redux/sof/types.js';

// Components
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

// Icons
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = (props) => {
    const [currentSearchText, setCurrentSearchText] = useState('');
    const [searchText, setSearchText] = useState('');
    const [searchCount, setSearchCount] = useState(0);
    const [inputError, setInputError] = useState(false);
    const {
        xs, md, lg,
        dispatch,
        SOFReducer
    } = props

    const submitSearch = () => {
        if(currentSearchText.length){
            setSearchText(currentSearchText);
            setSearchCount(searchCount + 1);
            setInputError(false);
            console.log('Props: ', props);
            dispatch({
                type: FETCH_SOF_SEARCH.REQUEST,
                data: {
                    currentPage: 1,
                    pageSize: SOFReducer.PageSize.data,
                    fromDate: SOFReducer.PeriodDates.data.fromDate,
                    toDate: SOFReducer.PeriodDates.data.toDate,
                    searchTags: SOFReducer.SearchTags.data,
                    searchText: currentSearchText,
                    sortBy: SOFReducer.SortBy.data,
                },
            });
        } else {
            setInputError(true);
        }
    };

    useEffect(() => {
        dispatch({
            type: SET_SEARCH_TEXT.REQUEST,
            data: {
                searchText,
            },
        });
    }, [searchText, searchCount])

    return (
        <Grid className="SearchInput" lg={lg} md={md} xs={xs} item>
            <InputLabel className="SearchInput__input-label" shrink>Stack Overflow questions</InputLabel>
            <FormControl variant="outlined">
                    <InputLabel htmlFor="search-text-input">Search</InputLabel>
                    <OutlinedInput
                        id="search-text-input"
                        onChange={(e) => (setCurrentSearchText(e.target.value))}
                        type={'text'}
                        error={inputError}
                        placeholder="Search Stack Overflow"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="Search submit"
                                onClick={submitSearch}
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
    );
};

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
    };
}

export default connect(mapStateToProps)(SearchInput)