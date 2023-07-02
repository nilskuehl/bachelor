import React, { Component, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import gordon from '../assets/gordonPlant.jpg'
import chris from '../assets/pexels-chris-hepworth-16047549.jpg'
import christ from '../assets/pexels-christyn-reyes-13458334.jpg'
import josh from '../assets/pexels-josh-withers-16978839.jpg'
import stjin from '../assets/pexels-stijn-dijkstra-16747506 (1).jpg'
import MyService from '../service/Service';
import { useNavigate } from 'react-router-dom';

import './MainAA.css'

interface MainAAProps {
    size: string;
    level: string;
    service: MyService
}

const myService = new MyService();

const MainAA: React.FC<MainAAProps> = ({ size, level, service }) => {
    document.title = "Home Level AA"
    document.documentElement.lang = 'en'



    document.title = "Main Level AA"
    document.documentElement.lang = 'en'


    const [currentLevel, setCurrentLevel] = useState<string>('');
    useEffect(() => {
        setCurrentLevel('AA')
        service.updateCurrentLevel(currentLevel)
        service.currentLocation = "../main"
    }, [])




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

    const navigate = useNavigate()

    function handleClick(link: string) {
        navigate(link)
    }

    return (
        <div>
            <div className="welcome">
                <h1 tabIndex={0}>Welcome</h1>
                <h2 tabIndex={0}>Home Level AA</h2>
            </div>
            <div className='contentContainer'>
                <div className="card">
                    <Card tabIndex={0} className='pip' onClick={() => handleClick('/sub/AA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AA') : null} title="Sustainability" subTitle="Very interesting" header={headerGordon} >
                        <p lang='en' className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            Very very interesting topic with lots of good aticles you should read its very cool yes indeed.
                            there is a boat in this picture very cool no? its in vienna, very international, very mr world wide.
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card onClick={() => handleClick('/sub/AA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AA') : null} title="Seaturtles" subTitle="Very interesting" tabIndex={0} header={headerChris} className='pip'>
                        <p lang='en' className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            Very very interesting topic with lots of good aticles you should read its very cool yes indeed.
                            there is a boat in this picture very cool no? its in vienna, very international, very mr world wide.
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card onClick={() => handleClick('/sub/AA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AA') : null} title="Technology" subTitle="Very interesting" header={headerChrist} tabIndex={0} className='pip'>
                        <p lang='en' className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            This is a atricle so fascinating. its about turtles, because turtles are very cool.
                            they have a big shell like the gas station. ok yes this is a very interesting article so go ahead and read
                            it. thank you.
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card onClick={() => handleClick('/sub/AA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AA') : null} title="Underground" subTitle="Very interesting" header={headerJosh} tabIndex={0} className='pip'>
                        <p lang='en' className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            this isnt really a topic about underground the picture is overgorund kinda weird no? but anyways its still
                            pretty.
                            sun's shining and everything very nice yes yes. i go write more areticles now.
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card onClick={() => handleClick('/sub/AA')} onKeyDown={(e) => e.key === 'Enter' ? navigate('/sub/AA') : null} title="Animals" subTitle="Very interesting" header={headerStjin} tabIndex={0} className='pip'>
                        <p lang='en' className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
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

export default MainAA;