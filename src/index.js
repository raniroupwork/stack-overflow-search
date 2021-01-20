import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.sass';

// Components
import App from './components/App/App.js';

// Providers
import Providers from './providers.js';

ReactDOM.render(
    <Providers>
        <App />
    </Providers>,
    document.getElementById('root'),
);
