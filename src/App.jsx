import React from 'react';
import Ways from './Routes'
import { Provider } from "react-redux"
import Store from './Redux-States/Store';

function App() {
    return (
        <Provider store={Store}>
            <div className="App">
                <Ways/>
            </div>
        </Provider>  
    );
}

export default App;
