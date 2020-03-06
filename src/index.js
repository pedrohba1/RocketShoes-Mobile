import * as React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import './config/ReactotronConfig';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default App;