import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import MainRouterComponent from "./components/main_router";


class App extends Component<{}> {
    render() {
        return (
            <div className="App">
                <Router>
                    <MainRouterComponent/>
                </Router>
            </div>
        );
    }
}

export default App;
