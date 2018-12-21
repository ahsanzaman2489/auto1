import React from 'react';
import {NavLink} from 'react-router-dom';



const HeaderComponent = (props: { src: string }) => {
    const {src} = props;
    const nav: Array<string> = ['purchase', 'my orders', 'sell'];
    const renderNav = nav => {
        return nav.map(function (item, index) {
            return (<li key={index}>{item}</li>)
        })
    };
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <NavLink to={'/'}><img src={src} className={'logo'} alt="logo"/></NavLink>
                </div>
                <div className="main-menu">
                    <ul>
                        {renderNav(nav)}
                    </ul>
                </div>
            </header>
        </div>
    );
};


export default HeaderComponent;