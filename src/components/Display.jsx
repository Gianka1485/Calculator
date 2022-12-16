import React from "react";
import '../styles/Display.css'

const Display = ({ result }) => (
    <div className="display" style={{fontSize: `${result.length >= 19 ? '1.75em' : '2em' }`}}>{result}</div>
);

export default Display;