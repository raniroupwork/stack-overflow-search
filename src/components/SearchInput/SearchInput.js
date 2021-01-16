// Modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './SearchInput.sass'

// Types
import { SET_SEARCH_TEXT } from '../../redux/sof/types.js';

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
    const {
        dispatch,
        SOFReducer: {
            SearchText: {
                data,
            }
        }
    } = props

    const submitSearch = () => {
        if(currentSearchText.length){
            setSearchText(currentSearchText);
            setSearchCount(searchCount + 1);
        }
    };

    useEffect(() => {
        dispatch({
            type: SET_SEARCH_TEXT.REQUEST,
            data: {
                searchText
            },
        });
    }, [searchText, searchCount])

    return (
        <Grid className="SearchInput" lg={3} md={4} xs={12} item>
            <InputLabel className="SearchInput__input-label" shrink>Stack Overflow questions</InputLabel>
            <FormControl variant="outlined">
                    <InputLabel htmlFor="search-text-input">Search</InputLabel>
                    <OutlinedInput
                        id="search-text-input"
                        onChange={(e) => (setCurrentSearchText(e.target.value))}
                        type={'text'}
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