// Modules
import React, { useState } from 'react';

// Styles
import './SearchInput.sass'

// Components
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

// Icons
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = () => {
    
    const [searchText, setSearchText] = useState('');

    return (
        <Grid className="SearchInput__search-input" lg={6} md={6} xs={12} item>
            <InputLabel className="SearchInput__input-label" shrink>Stack Overflow questions</InputLabel>
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
    );
};

export default SearchInput;
