import React, { Component, useEffect, useState } from 'react';
import MyService from '../service/Service';
import './RegisterAA.css'
import { InputText } from 'primereact/inputtext';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { off } from 'process';






interface RegisterAAProps {
    size: string;
    level: string;
    service: MyService;
}

const RegisterAA: React.FC<RegisterAAProps> = ({ service, size, level }) => {

    const navigate = useNavigate()

    const [firstName, setfirstName] = useState('');
    const [lastname, setlastname] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    const [userNameExistst, setUserNameExists] = useState(false);
    const [isAdult, setIsAdult] = useState(false);
    const [firstNameExists, setFirstNameExists] = useState(false);
    const [lastNameExists, setLastNameExists] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [validated, setValidated] = useState(false);

    const emailRegex: RegExp = /^.*@hft.de$/;

    var ages = 0

    function checkAge(birth: any) {
        if (date != null) {
            console.log("age")
            var today = new Date();
            var age = today.getFullYear() - birth.getFullYear();
            var month = today.getMonth() - birth.getMonth();
            if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
                age--;
            }
            if (age >= 18) {
                setIsAdult(true);
            } else
                setIsAdult(false);
            validate()
            ages = age
        }
    }

    function checkEmailValid(mail: string): void {
        setEmailValid(emailRegex.test(mail));
        validate();
    }

    function validate(): boolean {
        console.log("validating")
        if (firstNameExists && lastNameExists &&
            emailValid) {
            setValidated(true)
            return true;
        }
        return false;
    }

    function checkName(): void {
        if (firstName !== '') {
            setFirstNameExists(true);
        } else {
            setFirstNameExists(false);
        }
        if (lastname !== '') {
            setLastNameExists(true);
        } else {
            setLastNameExists(false);
        }
        if (username !== '') {
            setUserNameExists(true);
        } else {
            setUserNameExists(false);
        }
        validate();
    }

    useEffect(() => {
        document.title = 'Register AA'
        document.documentElement.lang = 'en'
        service.currentLocation = '../register'
        service.updateCurrentLevel('AA')

    })

    var menu = [{}]

    useEffect(() => {
        checkName()
        checkEmailValid(email)
        checkAge(date)
    }, [username, firstName, lastname, email, date]);

    return (
        <div lang='en' title='register'>
            <h2>Register Level AA</h2>
            <div className='center'>
                <div id='form'>
                    <div className='elemnt'>
                        <div className='labels' >
                            <label tabIndex={0} aria-label='firstname' className={`${size === 'size1' ? 'label' : size === 'size2' ? 'label-two' : 'label-half'}`}>Fistname:</label>

                            {!firstNameExists && <label className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`} tabIndex={0} >* field is required</label>}
                        </div>
                        <div className="col w-full">
                            <div className="card flex justify-content-center">
                                <InputText spellCheck={'true'} lang='en' tabIndex={0} role='name' aria-labelledby='input firstname' aria-required={true} aria-onInvalid={!firstNameExists} className={`${size === 'size1' ? 'p-input-one' : size === 'size2' ? 'p-input-two' : 'p-input-half'}`} value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='elemnt'>
                        <div className='labels' >
                            <label tabIndex={0} aria-label='lastname' className={`${size === 'size1' ? 'label' : size === 'size2' ? 'label-two' : 'label-half'}`}>Lastname:</label>

                            {!lastNameExists && <label tabIndex={0} className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`} >* field is required</label>}
                        </div>
                        <div className="col w-full">
                            <div className="card flex justify-content-center">
                                <InputText spellCheck={true} lang='en' tabIndex={0} aria-required={true} aria-onInvalid={!lastNameExists} className={`${size === 'size1' ? 'p-input-one' : size === 'size2' ? 'p-input-two' : 'p-input-half'}`} role='name' aria-labelledby='input firstname' value={lastname} onChange={(e) => setlastname(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='elemnt'>
                        <div className='labels' >
                            <label tabIndex={0} aria-label='firstname' className={`${size === 'size1' ? 'label' : size === 'size2' ? 'label-two' : 'label-half'}`}>Username:</label>

                            {!userNameExistst && <label tabIndex={0} className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`}>* field is required</label>}
                        </div>
                        <div className="col w-full">
                            <div className="card flex justify-content-center">
                                <InputText autoComplete='name' spellCheck={true} lang='en' aria-required={true} aria-onInvalid={!userNameExistst} tabIndex={0} className={`${size === 'size1' ? 'p-input-one' : size === 'size2' ? 'p-input-two' : 'p-input-half'}`} role='name' aria-labelledby='input firstname' value={username} onChange={(e) => { setusername(e.target.value); checkName() }} />
                            </div>
                        </div>
                    </div>

                    <div className='elemnt'>
                        <div className='labels' >
                            <label tabIndex={0} aria-label='firstname' className={`${size === 'size1' ? 'label' : size === 'size2' ? 'label-two' : 'label-half'}`}>Email:</label>

                            {!emailValid && <label tabIndex={0} className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`}>* field is required</label>}
                        </div>
                        <div className="col w-full">
                            <div className="card flex justify-content-center">
                                <InputText spellCheck={true} lang='en' tabIndex={0} aria-required={true} aria-onInvalid={!emailValid} className={`${size === 'size1' ? 'p-input-one' : size === 'size2' ? 'p-input-two' : 'p-input-half'}`} role='name' aria-labelledby='input firstname' value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                        </div>
                        <div className='req' >
                            {!emailValid && <label tabIndex={0} className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`}>email must be @hft.de</label>}

                        </div>
                    </div>
                    <div className='elemnt'>
                        <div className='labels' >
                            <label tabIndex={0} aria-label='firstname' className={`${size === 'size1' ? 'label' : size === 'size2' ? 'label-two' : 'label-half'}`}>Birthday:</label>

                            {!isAdult && <label tabIndex={0} className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`}>* field is required</label>}
                        </div>
                        <div className={`${size === 'size1' ? 'calendar-one' : size === 'size2' ? 'calendar-two' : 'calendar-half'}`}>
                            <div className="card flex justify-content-center">
                                <Calendar showIcon className="cal" value={date} aria-required={true} aria-onInvalid={!isAdult} onChange={(e: CalendarChangeEvent) => setDate(e.value as Date | null)} />
                            </div>
                        </div>
                        <div className='req' >
                            {!isAdult && <label tabIndex={0} className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`}>must be 18 years old</label>}
                            <label
                                className={`${size === 'size1' ? 'label' : size === 'size2' ? 'label-two' : 'label-half'}`}>*
                                red marked fields are required</label>
                        </div>

                    </div>

                    <div className='buttonContainer'>
                        <div className='left'>
                            <Button label='Submit' onClick={() => navigate('main/A')} disabled={!validated}></Button>
                        </div>
                        <div className='right'>
                            <Button onClick={() => navigate('main/A')} label='Cancel' id='cancelButton' aria-label='Cancel Form'></Button>
                        </div>
                    </div>
                </div>
            </div >
        </div >


    )
}

export default RegisterAA