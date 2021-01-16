// Modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './SearchTags.sass';

// Types
import { SET_SEARCH_TAGS } from '../../redux/sof/types.js';

// Components
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TagInput from 'material-ui-chip-input'

const SearchTags = (props) => {
    const [searchTags, setSearchTags] = useState([]);
    const [SearchTagsFull, setSearchTagsFull] = useState(false);
    const {
        dispatch,
        SOFReducer: {
            SearchTags: {
                    data,
            }
        }
    } = props;

    useEffect(() => {
        dispatch({
            type: SET_SEARCH_TAGS.REQUEST,
            data: {
                searchTags
            },
        });
    }, [searchTags, SearchTagsFull])

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
        <Grid className="SearchTags" lg={2} md={3} xs={12} item>
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
                fullWidth={true}
                disableUnderline={true}
            />
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
    };
}

export default connect(mapStateToProps)(SearchTags)