// Modules
import React, { useEffect, useState } from 'react';

// Styles
import './App.sass';

// Components
import Login from '../../containers/Login/Login.js'
import SearchPanel from '../../containers/SearchPanel/SearchPanel.js'
import QuestionsList from '../../containers/QuestionsList/QuestionsList';


const App = () => {
    const [isLogged, setValue] = useState(true);

    return (
        <main className="App">
            <header>
                <h1>Stack Overflow Find Questions</h1>
            </header>
            {!isLogged ? (
                <Login></Login>
            ):(
                <div>
                    <SearchPanel></SearchPanel>
                    <QuestionsList></QuestionsList>
                </div>
            )}
        </main>
    );
};

export default App;
