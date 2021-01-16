// Modules
import React, { useEffect } from 'react';

// Styles
import './App.sass';

// Components
import Login from '../../containers/Login/Login.js'
import SearchPanel from '../../containers/SearchPanel/SearchPanel.js'
import QuestionsList from '../../containers/QuestionsList/QuestionsList';


const App = () => {
    return (
        <main className="App">
            <Login></Login>
            <div>
                <SearchPanel></SearchPanel>
                <QuestionsList></QuestionsList>
            </div>
        </main>
    );
};

export default App;
