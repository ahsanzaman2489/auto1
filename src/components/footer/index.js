import React from 'react';

const FooterComponent = () => {
    const rights = '© AUTO1 Group';
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            {rights + " " + currentYear}
        </footer>
    );
};


export default FooterComponent;