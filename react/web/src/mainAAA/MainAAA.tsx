import React, { Component, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import gordon from '../assets/gordonPlant.jpg'
import chris from '../assets/pexels-chris-hepworth-16047549.jpg'
import christ from '../assets/pexels-christyn-reyes-13458334.jpg'
import josh from '../assets/pexels-josh-withers-16978839.jpg'
import stjin from '../assets/pexels-stijn-dijkstra-16747506 (1).jpg'
import MyService from '../service/Service';
import { useNavigate } from 'react-router-dom';

import './MainAAA.css'

interface MainAAAProps {
    size: string;
    level: State[];
    service: MyService;
    foreground: string;
    background: string;
}


interface State {
    label: string;
    url: string;
    target: string;
}

const MainAAA: React.FC<MainAAAProps> = ({ service, size, level, foreground, background }) => {

    document.title = "Home Level AAA"
    document.documentElement.lang = 'en'

    var menuItem = { label: 'home', url: document.location.pathname, target: '_self' }
    var [menuItems, setMenuItems] = useState<State[]>(level)



    const [currentLevel, setCurrentLevel] = useState<string>('AAA');
    useEffect(() => {
        service.updateCurrentLevel(currentLevel)
        service.currentLocation = '../main'
        var raus = menuItems.find(item => item.url === "/sub/AAA") !== undefined
        var rein = menuItems.find(item => item.url === "/about") !== undefined
        if (raus || rein) {
            menuItems.pop()
            service.updateBc(menuItems)
        }
        var boold = menuItems.find(item => item.url === menuItem.url) !== undefined
        if (!boold) {
            menuItems.push(menuItem)
            console.log(menuItems)
            service.updateBc(menuItems)
        }
    }, [])

    const navigate = useNavigate()

    function handleClick(link: string) {
        navigate(link)
    }



    const headerGordon = (
        <img alt="Card" aria-label='Picture of a peer' src={gordon} />
    );
    const headerChris = (
        <img alt="Card" aria-label='Picture of the Donau' src={chris} />
    );
    const headerChrist = (
        <img alt="Card" aria-label="Picture of a lake" src={christ} />
    );
    const headerJosh = (
        <img alt="Card" aria-label='Picture of the fields' src={josh} />
    );
    const headerStjin = (
        <img alt="Card" aria-label='Picture of the dunes' src={stjin} />
    );
    return (
        <div>
            <div className="welcome" >
                <h1 tabIndex={0} style={{ color: foreground, backgroundColor: background }}>Welcome</h1>
                <h2 tabIndex={0} style={{ color: foreground, backgroundColor: background }} >Home Level AAA</h2>
            </div>
            <div className='contentContainer'>
                <div className="card">
                    <Card tabIndex={0} role='contentinfo' className='pip' onClick={() => handleClick('/sub/AAA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AAA') : null}
                        title="Sustainability" subTitle="Very interesting" header={headerGordon} style={{ color: foreground, backgroundColor: background }}>
                        <p style={{ color: foreground, backgroundColor: background }}
                            className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            Very very interesting topic with lots of good aticles you should read its very cool yes indeed.
                            there is a boat in this picture very cool no? its in vienna, very international, very mr world wide.
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card tabIndex={0} role='contentinfo' className='pip' onClick={() => handleClick('/sub/AAA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AAA') : null}
                        title="Seaturtles" subTitle="Very interesting" header={headerChris} style={{ color: foreground, backgroundColor: background }} >
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            This is a atricle so fascinating. its about turtles, because turtles are very cool.
                            they have a big shell like the gas station. ok yes this is a very interesting article so go ahead and read
                            it. thank you.
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card tabIndex={0} role='contentinfo' className='pip' onClick={() => handleClick('/sub/AAA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AAA') : null}
                        title="Technology" subTitle="Very interesting" header={headerChrist} style={{ color: foreground, backgroundColor: background }}>
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card tabIndex={0} role='contentinfo' className='pip' onClick={() => handleClick('/sub/AAA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AAA') : null}
                        title="Underground" subTitle="Very interesting" header={headerJosh} style={{ color: foreground, backgroundColor: background }}>
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            this isnt really a topic about underground the picture is overgorund kinda weird no? but anyways its still
                            pretty.
                            sun's shining and everything very nice yes yes. i go write more articles now bye.
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card tabIndex={0} role='contentinfo' onClick={() => handleClick('/sub/AAA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AAA') : null}
                        title="Animals" subTitle="Very interesting" header={headerStjin} className='pip' style={{ color: foreground, backgroundColor: background }}>
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            Animals are cool, because they have fur sometimes. But sometimes they dont which is also cool. Sometimes
                            they live
                            underwater thats crazy isnt it? Go ahead and look at these articles.
                        </p>
                    </Card>
                </div>
            </div >
        </div>
    );
};

export default MainAAA;