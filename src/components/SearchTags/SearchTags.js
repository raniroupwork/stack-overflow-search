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
    const [SearchTagsFull, setSearchTagsFull] = useState(false);
    const handleAddChip = (tag) => {
        if(searchTags.length <= 2) {
            let tempTags = searchTags;
            tempTags.push(tag);    
            if (tempTags.length === 3) {
                setSearchTagsFull(true) 
            }
            setSearchTags(tempTags);
        } else {
            setSearchTagsFull(true);
            return;
        }
    }
    const handleDeleteChip = (tag) => {
        setSearchTags(searchTags.filter(item => item !== tag));
        setSearchTagsFull(false);
    }
    return (
        <Grid lg={2} md={2} xs={4} item>
            <InputLabel className="SearchTags__input-label" shrink id="search-tags">
            Tags
            </InputLabel>
            <TagInput
                className={`SearchTags__input  ${SearchTagsFull ? "SearchTags__input--disable" : ""}`}
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
