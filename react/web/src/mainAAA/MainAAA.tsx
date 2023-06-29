import React, { Component, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import gordon from '../assets/gordonPlant.jpg'
import chris from '../assets/pexels-chris-hepworth-16047549.jpg'
import christ from '../assets/pexels-christyn-reyes-13458334.jpg'
import josh from '../assets/pexels-josh-withers-16978839.jpg'
import stjin from '../assets/pexels-stijn-dijkstra-16747506 (1).jpg'
import MyService from '../service/Service';
import './MainAAA.css'

interface MainAAAProps {
    size: string;
    level: string;
    service: MyService;
    foreground: string;
    background: string;
}



const MainAAA: React.FC<MainAAAProps> = ({ service, size, level, foreground, background }) => {
    const [currentLevel, setCurrentLevel] = useState<string>('AAA');
    useEffect(() => {
        service.updateCurrentLevel(currentLevel)
        service.currentLocation = '../main'
    }, [])




    const headerGordon = (
        <img alt="Card" src={gordon} />
    );
    const headerChris = (
        <img alt="Card" src={chris} />
    );
    const headerChrist = (
        <img alt="Card" src={christ} />
    );
    const headerJosh = (
        <img alt="Card" src={josh} />
    );
    const headerStjin = (
        <img alt="Card" src={stjin} />
    );
    return (
        <div>
            <div className="welcome">
                <h1 tabIndex={0} style={{ color: foreground, backgroundColor: background }}>Welcome</h1>
                <h2 tabIndex={0} style={{ color: foreground, backgroundColor: background }} >Home Level AAA</h2>
            </div>
            <div className='contentContainer'>
                <div className="card">
                    <Card className='card' title="Title" subTitle="Subtitle" header={headerGordon} style={{ color: foreground, backgroundColor: background }}>
                        <p style={{ color: foreground, backgroundColor: background }}
                            className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card title="Title" subTitle="Subtitle" className='card' header={headerChris} style={{ color: foreground, backgroundColor: background }} >
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card title="Title" subTitle="Subtitle" header={headerChrist} className="card" style={{ color: foreground, backgroundColor: background }}>
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card title="Title" subTitle="Subtitle" header={headerJosh} className="card" style={{ color: foreground, backgroundColor: background }}>
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="card">
                    <Card title="Title" subTitle="Subtitle" header={headerStjin} className="card" style={{ color: foreground, backgroundColor: background }}>
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`} style={{ color: foreground, backgroundColor: background }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div >
        </div>
    );
};

export default MainAAA;