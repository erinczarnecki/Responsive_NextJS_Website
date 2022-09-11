import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

const work = () => {
    return (
        <div>
            <Hero heading="My Work" message="Here is some of my recent work." />
            <Portfolio />
        </div>
    )
}

export default work
