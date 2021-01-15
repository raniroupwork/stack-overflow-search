// Modules
import React, { useEffect } from 'react';

// Styles
import './App.sass';

// Components
import Login from '../../containers/Login/Login.js'
import SearchPanel from '../../containers/SearchPanel/SearchPanel.js'


const App = () => {
    return (
        <main className="App">
            <Login></Login>
            <SearchPanel></SearchPanel>
        </main>
    );
};

export default App;
