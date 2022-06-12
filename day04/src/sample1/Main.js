import React, { useState } from 'react';
import '../assets/css/reset.css'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './style.css'

const Main = () => {
    const [form, setForm] = useState({
        username : '',
        age: '',
        addr:'',
        tel:'',
        job:'',
        email:'',
        sex:'',
        inter:''
    })

    const [step, setStep] = useState(1)
    
    // form.username 비구조
    const {username, age, addr, tel, job, email, sex, inter} = form;

    const changeInput = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onNext = () => {
        setStep(step + 1)
    }

    const onPrev = () => {
        setStep(step - 1)
    }
    
    return (
        <div className="wrap">
            {
                step === 1 &&
                <Step1 changeInput={changeInput} username={username} age={age} addr={addr} tel={tel} onNext={onNext} />
            }
            {
                step === 2 &&
                <Step2 changeInput={changeInput} job={job} email={email} sex={sex} inter={inter} onNext={onNext} onPrev={onPrev} />
            }
            {
                step === 3 &&
                <Step3 username={username} age={age} addr={addr} tel={tel} job={job} email={email} sex={sex} inter={inter} onNext={onNext} onPrev={onPrev} />
            }
            {
                step === 4 &&
                <Step4 username={username}/>
            }
        </div>
    );
};

export default Main;