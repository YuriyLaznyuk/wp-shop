import React from 'react';
import StopWatch from "./stopwatch/StopWatch";

function About(props) {
    return (
        <div>
            <h2 style={{textAlign:'center'}}>About</h2>
            <StopWatch/>
        </div>
    );
}

export default About;