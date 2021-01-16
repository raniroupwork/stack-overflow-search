// Modules
import React, { useState } from 'react';

// Styles
import './SearchTags.sass';

// Components
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TagInput from 'material-ui-chip-input'

const SearchTags = () => {
    const [searchTags, setSearchTags] = useState([]);
    const handleAddChip = (tag) => {
        if(searchTags.length <= 2) {
            let tempTags = searchTags;
            tempTags.push(tag);    
            setSearchTags(tempTags);
        } else {
            return;
        }

    }
    const handleDeleteChip = (tag) => {
        setSearchTags(searchTags.filter(item => item !== tag));
    }
    return (
        <Grid lg={4} md={4} xs={6} item>
            <InputLabel className="SearchTags__input-label" shrink id="search-tags">
            Tags
            </InputLabel>
            <TagInput
                className="SearchTags__input"
                id={'search-tags'}    
                value={searchTags}
                onAdd={(tag) => handleAddChip(tag)}
                onDelete={(tag, index) => handleDeleteChip(tag, index)}
                allowDuplicates={false}
            />
        </Grid>
    );
};

export default SearchTags;
