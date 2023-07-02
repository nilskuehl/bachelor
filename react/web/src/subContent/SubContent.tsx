import React, { Component, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import gordon from '../assets/gordonPlant.jpg'
import chris from '../assets/pexels-chris-hepworth-16047549.jpg'
import christ from '../assets/pexels-christyn-reyes-13458334.jpg'
import josh from '../assets/pexels-josh-withers-16978839.jpg'
import stjin from '../assets/pexels-stijn-dijkstra-16747506 (1).jpg'
import MyService from '../service/Service';
import './SubContent.css'
import { useNavigate } from 'react-router-dom';

interface SubContentAProps {
    size: string;
    level: string;
    service: MyService
}


const SubContent: React.FC<SubContentAProps> = ({ size, level, service }) => {

    document.title = "Sub Level A"
    document.documentElement.lang = 'en'


    const navigate = useNavigate()

    const [currentLevel, setCurrentLevel] = useState<string>('');
    useEffect(() => {
        service.currentLocation = "../sub"
        setCurrentLevel('AA')
        service.updateCurrentLevel(currentLevel)
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
                <div className="card" >
                    <Card onClick={() => handleClick("/content/A")} onKeyDown={(e) => e.key === 'Enter' ? navigate('/content/A') : null} title="Seaturtles" subTitle="Very interesting" tabIndex={0} header={headerChris} >
                        <p>
                            This is a atricle so fascinating. its about turtles, because turtles are very cool.
                            they have a big shell like the gas station. ok yes this is a very interesting article so go ahead and read
                            it. thank you.
                        </p>
                    </Card>
                </div>
                <div className="card" >
                    <Card onClick={() => handleClick("/content/A")} onKeyDown={(e) => e.key === 'Enter' ? navigate('/content/A') : null} title="Technology" subTitle="Very interesting" header={headerChrist} tabIndex={0}>
                        <p >
                            this isnt really a topic about underground the picture is overgorund kinda weird no? but anyways its still
                            pretty.
                            sun's shining and everything very nice yes yes. i go write more articles now bye.
                        </p>
                    </Card>
                </div>
                <div className="card" >
                    <Card title="Underground" subTitle="Very interesting" onClick={() => handleClick("/content/AA")} header={headerJosh} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/A') : null} tabIndex={0}>
                        <p >
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

export default SubContent;

