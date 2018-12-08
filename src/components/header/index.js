import React from 'react';


const HeaderComponent = (props: { src: string }) => {
    const {src} = props;
    const nav = ['purchase', 'my orders', 'sell'];
    const renderNav = nav => {
        return nav.map(function (item, index) {
            return (<li key={index}>{item}</li>)
        })
    };
    return (
        <header>
            <div>
                <img src={src} className={'logo'} alt="logo"/>
            </div>
            <div>
                <ul>
                    {renderNav(nav)}
                </ul>
            </div>
        </header>
    );
};


export default HeaderComponent;