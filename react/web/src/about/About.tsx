import React, { Component, useEffect, useState } from 'react';
import MyService from '../service/Service';

import './About.css'

interface AboutProps {
    size: string;
    level: State[];
    service: MyService
    foreground: string;
    background: string;
}

interface State {
    label: string;
    url: string;
    target: string;
}

const myService = new MyService();

const About: React.FC<AboutProps> = ({ size, level, service, foreground, background }) => {

    document.title = "About"
    document.documentElement.lang = 'en'

    var menuItem = { label: 'about', url: '/about', target: '_self' }

    var [menuItems, setMenuItems] = useState<State[]>(level)

    const [currentLevel, setCurrentLevel] = useState<string>('');
    useEffect(() => {
        setCurrentLevel('AAA')
        service.updateCurrentLevel("AAA")

        service.currentLocation = "../about"
        service.currentBc.subscribe((menu) => setMenuItems(menu))
        var boold = menuItems.find(item => item.url === menuItem.url) !== undefined
        if (!boold) {
            menuItems.push(menuItem)
            service.updateBc(menuItems)
        }
    }, [])





    return (
        <div className="center">

            <div className="about">
                <h2>About this website</h2>
                <p lang="eng" style={{ color: foreground, backgroundColor: background }}
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

export default About;