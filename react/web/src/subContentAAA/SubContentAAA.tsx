import React, { Component, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import gordon from '../assets/gordonPlant.jpg'
import chris from '../assets/pexels-chris-hepworth-16047549.jpg'
import christ from '../assets/pexels-christyn-reyes-13458334.jpg'
import josh from '../assets/pexels-josh-withers-16978839.jpg'
import stjin from '../assets/pexels-stijn-dijkstra-16747506 (1).jpg'
import MyService from '../service/Service';
import './SubContentAAA.css'
import { useNavigate } from 'react-router-dom';

interface SubContentAAAProps {
    size: string;
    level: State[];

    service: MyService
    foreground: string
    background: string
}

interface State {
    label: string;
    url: string;
    target: string;
}


const SubContentAAA: React.FC<SubContentAAAProps> = ({ size, level, service, foreground, background }) => {

    document.title = "Sub Level AAA"
    document.documentElement.lang = 'en'
    var menuItem = { label: 'content', url: document.location.pathname, target: '_self' }

    var [menuItems, setMenuItems] = useState<State[]>(level)


    const navigate = useNavigate()

    const [currentLevel, setCurrentLevel] = useState<string>('AAA');
    useEffect(() => {
        setCurrentLevel('AAA')
        service.updateCurrentLevel(currentLevel)
        service.currentBc.subscribe((menu) => setMenuItems(menu))
        service.currentLocation = "../sub"
        console.log("sub" + menuItems)
        var raus = menuItems.find(item => item.url === "/content/AAA") !== undefined
        if (raus) {
            menuItems.pop()
            service.updateBc(menuItems)
        }
        var boold = menuItems.find(item => item.url === menuItem.url) !== undefined
        if (!boold) {
            menuItems.push(menuItem)
            service.updateBc(menuItems)
        }
    }, [])

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
            <div className='contentContainer' tabIndex={-1}>
                <div className="card">
                    <Card tabIndex={0} className='pip' onClick={() => handleClick('/content/AAA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/content/AAA') : null}
                        title="Seaturtles" subTitle="Very interesting" header={headerChris} style={{ color: foreground, backgroundColor: background }} >
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            This is a atricle so fascinating. its about turtles, because turtles are very cool.
                            they have a big shell like the gas station. ok yes this is a very interesting article so go ahead and read
                            it. thank you.
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card tabIndex={0} className='pip' onClick={() => handleClick('/content/AAA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/content/AAA') : null}
                        title="Technology" subTitle="Vry interesting" header={headerChrist} style={{ color: foreground, backgroundColor: background }}>
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            this isnt really a topic about underground the picture is overgorund kinda weird no? but anyways its still
                            pretty.
                            sun's shining and everything very nice yes yes. i go write more articles now bye.
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card tabIndex={0} className='pip' onClick={() => handleClick('/content/AAA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/content/AAA') : null}
                        title="Underground" subTitle="Very interesting" header={headerJosh} style={{ color: foreground, backgroundColor: background }}>
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
}

export default SubContentAAA;

