// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './SearchPanel.sass';

// Components

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
          <input></input>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
    };
}

export default connect(mapStateToProps)(SearchPanel);
