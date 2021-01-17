// Modules
import React, { useEffect, useState } from 'react';

// Styles
import './App.sass';
import 'semantic-ui-css/semantic.min.css'

// Components
import Header from '../../containers/Header/Header.js'
import Login from '../../containers/Login/Login.js'
import SearchPanel from '../../containers/SearchPanel/SearchPanel.js'
import QuestionsList from '../../containers/QuestionsList/QuestionsList';


const App = () => {
    const [isLogged, setValue] = useState(true);

    return (
        <main className="App">
            <Header></Header>
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
