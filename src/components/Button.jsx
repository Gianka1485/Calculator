import React from 'react';
import '../styles/Button.css';

const button = ({ children , clickControl , special}) => {

    return(
        <button type="button"
        className={`button ${special}`.trimEnd()}
        onClick={() => clickControl(children)}>
            {children}
        </button>
    );
};

export default button;