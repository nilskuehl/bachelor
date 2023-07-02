import React, { Component, useEffect, useState } from 'react';
import MyService from '../service/Service';
import stjin from '../assets/pexels-stijn-dijkstra-16747506 (1).jpg'

import './ContentAAA.css'

interface ContentAAAProps {
    size: string;
    level: State[];
    service: MyService
    foreground: string;
    background: string;
    animated: boolean
}

interface State {
    label: string;
    url: string;
    target: string;
}


const myService = new MyService();

const ContentAAA: React.FC<ContentAAAProps> = ({ animated, size, level, service, foreground, background }) => {

    document.title = "Content"
    document.documentElement.lang = 'en'

    var menuItem = { label: 'Article', url: document.location.pathname, target: '_self' }

    var [menuItems, setMenuItems] = useState<State[]>(level)



    const [currentLevel, setCurrentLevel] = useState<string>('');
    useEffect(() => {
        setCurrentLevel('AAA')
        service.updateCurrentLevel("AAA")
        service.currentLocation = "../content"
        service.currentBc.subscribe((menu) => setMenuItems(menu))
        var boold = menuItems.find(item => item.url === menuItem.url) !== undefined
        if (!boold) {
            menuItems.push(menuItem)
            console.log(menuItems)
            service.updateBc(menuItems)
        }
    }, [])





    return (
        <div className="center">

            <div className="about">
                <h2 lang='eng'>Very Interesting Article</h2>
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
            <img src={stjin} alt="animated picture" className={`${animated === true ? 'animated' : 'size2'}`}></img>

        </div >
    );
}

export default ContentAAA;