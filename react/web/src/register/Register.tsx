import React, { Component, useEffect, useState } from 'react';
import MyService from '../service/Service';
import './Register.css'
import { InputText } from 'primereact/inputtext';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';






interface RegisterProps {
    size: string;
    level: string;
    service: MyService;
}

const Register: React.FC<RegisterProps> = ({ service, size, level }) => {

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
        document.title = 'Register A'
    })

    var menu = [{}]

    useEffect(() => {
        checkName()
        checkEmailValid(email)
        checkAge(date)
    }, [username, firstName, lastname, email, date]);

    return (
        <div lang='eng' title='register'>
            <h1>Register Level A</h1>
            <div className='center'>
                <div id='form'>
                    <div className='elemnt'>
                        <div className='labels' >
                            <label tabIndex={0} aria-label='firstname' className={`${size === 'size1' ? 'label' : size === 'size2' ? 'label-two' : 'label-half'}`}>Fistname:</label>

                            {!firstNameExists && <label tabIndex={0} className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`}>* field is required</label>}
                        </div>
                        <div className="col w-full">
                            <div className="card flex justify-content-center">
                                <InputText tabIndex={0} className={`${size === 'size1' ? 'p-input-one' : size === 'size2' ? 'p-input-two' : 'p-input-half'}`} role='name' aria-labelledby='input firstname' value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='elemnt'>
                        <div className='labels' >
                            <label tabIndex={0} aria-label='lastname' className={`${size === 'size1' ? 'label' : size === 'size2' ? 'label-two' : 'label-half'}`}>Lastname:</label>

                            {!lastNameExists && <label tabIndex={0} className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`}>* field is required</label>}
                        </div>
                        <div className="col w-full">
                            <div className="card flex justify-content-center">
                                <InputText tabIndex={0} className={`${size === 'size1' ? 'p-input-one' : size === 'size2' ? 'p-input-two' : 'p-input-half'}`} role='name' aria-labelledby='input firstname' value={lastname} onChange={(e) => setlastname(e.target.value)} />
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
                                <InputText tabIndex={0} className={`${size === 'size1' ? 'p-input-one' : size === 'size2' ? 'p-input-two' : 'p-input-half'}`} role='name' aria-labelledby='input firstname' value={username} onChange={(e) => { setusername(e.target.value); checkName() }} />
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
                                <InputText tabIndex={0} className={`${size === 'size1' ? 'p-input-one' : size === 'size2' ? 'p-input-two' : 'p-input-half'}`} role='name' aria-labelledby='input firstname' value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='elemnt'>
                        <div className='labels' >
                            <label tabIndex={0} aria-label='firstname' className={`${size === 'size1' ? 'label' : size === 'size2' ? 'label-two' : 'label-half'}`}>Birthday:</label>

                            {!isAdult && <label tabIndex={0} className={`${size === 'size1' ? 'error-required' : size === 'size2' ? 'error-required-two' : 'error-required-half'}`}>* field is required</label>}
                        </div>
                        <div className={`${size === 'size1' ? 'calendar-one' : size === 'size2' ? 'calendar-two' : 'calendar-half'}`}>
                            <div className="card flex justify-content-center">
                                <Calendar style={{ width: '3000px !important' }} showIcon className="cal" value={date} onChange={(e: CalendarChangeEvent) => setDate(e.value as Date | null)} />
                            </div>
                        </div>
                    </div>
                    <div className='buttonContainer'>
                        <div className='left'>
                            <Button label='Submit' disabled={!validated}></Button>
                        </div>
                        <div className='right'>
                            <Button label='Cancel'></Button>
                        </div>
                    </div>
                </div>
            </div >
        </div >


    )
}

export default Register