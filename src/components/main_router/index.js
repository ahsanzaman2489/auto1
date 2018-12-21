import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import CarListContainer from "../../containers/car_list";
import CarDetailContainer from "../../containers/car_detail";
import NotFoundComponent from "../404";
import logo from "../../logo.png";
import Header from "../header";
import Footer from "../footer";

const MainRouterComponent = () => {
    return (
        <div>
            <Header src={logo}/>
                <Switch>
                    <Route exact path={'/cars/list'} component={CarListContainer}/>
                    <Route path={'/cars/detail/:stockNumber'} component={CarDetailContainer}/>
                    <Redirect exact from="/" to="/cars/list"/>
                    <Route path="*" component={NotFoundComponent}/>
                </Switch>
            <Footer/>
        </div>
    );
};

export default MainRouterComponent;