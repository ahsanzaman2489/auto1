import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import CarListContainer from "./containers/car_list";
import CarDetailContainer from "./containers/car_detail";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component<{}> {
    render() {
        return (
            <div className={'App'}>
                <Header src={logo}/>
                <Router>
                    <Switch>
                        <Route path={'/cars/list'} component={CarListContainer}/>
                        <Route path={'/cars/detail/:stockNumber'} component={CarDetailContainer}/>
                        <Redirect exact from="/" to="/cars/list"/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
