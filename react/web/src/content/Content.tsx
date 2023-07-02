import React, { Component, useEffect, useState } from 'react';
import MyService from '../service/Service';

import './Content.css'

interface ContentProps {
    size: string;
    level: string;
    service: MyService
    foreground: string;
    background: string;
}

const myService = new MyService();

const Content: React.FC<ContentProps> = ({ size, level, service, foreground, background }) => {

    document.title = "About"

    const [currentLevel, setCurrentLevel] = useState<string>('');
    useEffect(() => {
        setCurrentLevel('A')
        service.updateCurrentLevel("A")

        service.currentLocation = "../content"
    }, [])





    return (
        <div className="center">

            <div className="about">
                <h2 lang='eng'>Very Interesting Article</h2>
                <p
                    className={`${size === 'size1' ? 'about' : size === 'size2' ? 'about-two' : 'about-half'}`}>
                    This Website is supposed to be an Implementation test of the WCAG 2.1 Guideline
                    It is structured as 3 in 1 Website. This means there are 3 versions of every Component and workflow.
                    Each component is supposed to achieve the full confrormance for every Conformance Level.
                    These Levels being the levels A, AA and AAA
                    For more refferences about the Specification visit <a href="https://www.w3.org/TR/WCAG21/"
                        target="_self" className={`${size === 'size1' ? 'a-one' : size === 'size2' ? 'a-two' : 'a-half'}`}>WCAG
                        2.1</a> official Specification from W3C
                </p>
            </div>
        </div >
    );
}

export default Content;