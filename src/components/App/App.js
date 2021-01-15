// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './App.sass';

// Components
import Login from '../../containers/Login/Login.js'

// Types
import { FETCH_SOF_SEARCH } from '../../redux/sof/types.js';

const App = (props) => {
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
    console.log('props:', data);
    useEffect(() => {
        dispatch({
            type: FETCH_SOF_SEARCH.REQUEST,
            data: {
              currentPage: 3,
              pageSize: 10,
              sortType: 'votes',
              searchText: 'node'
            },
        });
    }, [])

    return (
        <main className="App">
          {/* <Login></Login> */}
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
    };
}

export default connect(mapStateToProps)(App);
