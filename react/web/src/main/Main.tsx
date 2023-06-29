import React, { Component, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import gordon from '../assets/gordonPlant.jpg'
import chris from '../assets/pexels-chris-hepworth-16047549.jpg'
import christ from '../assets/pexels-christyn-reyes-13458334.jpg'
import josh from '../assets/pexels-josh-withers-16978839.jpg'
import stjin from '../assets/pexels-stijn-dijkstra-16747506 (1).jpg'
import MyService from '../service/Service';
import './Main.css'
import { useNavigate } from 'react-router-dom';

interface MainAProps {
    size: string;
    level: string;
    service: MyService
}


const Main: React.FC<MainAProps> = ({ size, level, service }) => {

    const navigate = useNavigate()

    const [currentLevel, setCurrentLevel] = useState<string>('');
    useEffect(() => {
        setCurrentLevel('A')
        service.currentLocation = "../main"
    }, [])

    function handleClick(link: string) {
        navigate(link)
    }



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
                <h1 tabIndex={1}>Welcome</h1>
                <h2 tabIndex={1}>Home Level A</h2>
            </div>
            <div className='contentContainer' tabIndex={-1}>
                <div className="card" tabIndex={0}>
                    <Card onClick={() => handleClick("/main/AA")} className='card' title="Title" subTitle="Subtitle" header={headerGordon} >
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="card" tabIndex={0}>
                    <Card title="Title" subTitle="Subtitle" className='card' header={headerChris} >
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="card" tabIndex={0}>
                    <Card title="Title" subTitle="Subtitle" header={headerChrist} className="card">
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="card" tabIndex={0}>
                    <Card title="Title" subTitle="Subtitle" header={headerJosh} className="card">
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="card" tabIndex={0}>
                    <Card title="Title" subTitle="Subtitle" header={headerStjin} className="card">
                        <p className={`${size === 'size1' ? 'para-one' : size === 'size2' ? 'para-two' : 'para-half'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div >
        </div>
    );
}

export default Main;