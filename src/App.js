import React, {Component} from 'react';

import './App.scss';
import MainRouterComponent from "./components/main_router";

/**
 * App component renders Main routes component.
 * @constructor
 */

class App extends Component<{}> {
    render() {
        return (
            <div className="App">
                <MainRouterComponent/>
            </div>
        );
    }
}

export default App;
