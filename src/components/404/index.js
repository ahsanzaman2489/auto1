import React from 'react';
import logo from '../../logo.png';
import {NavLink} from 'react-router-dom';

/**
 * Not found component render when no routes matches.
 * @constructor
 */

const NotFoundComponent = () => {
    return (
        <div className="container">
            <div className="pagenotfound">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="content404">
                    <h1>404 - Not Found</h1>
                    <p>Sorry, the page you are looking for does not exist.
                        You can always go back to the <NavLink to={`/cars/list/`}>homepage</NavLink>.</p>
                </div>
            </div>

        </div>
    );
};


export default NotFoundComponent;
