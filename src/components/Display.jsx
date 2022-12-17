import React from "react";
import '../styles/Display.css'

const Display = ({ result }) => {
    const font = (s, l) => result.length >= 18 ? s : l;
    return (
        <div className="display" style={window.innerWidth <= 400 ? {fontSize: font('1.1em', '1.5em')} : {fontSize: font('1.75em', '2em')} }>{result}</div>
    );
}

export default Display;