import React from "react";
import '../styles/Display.css'

const Display = ({ result }) => (
    <div className="display" style={`font-size: ${result.length >= 20 ? 30 : 10};`}>{result}</div>
);

export default Display;