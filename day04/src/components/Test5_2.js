import React, { useRef, useState } from 'react';
// 폼요소 반복 작업 줄이는 과정 2단계
const Test5 = () => {
    const idRef = useRef();
    const [form, setForm] = useState({
        userid : '',
        userpw : '',
        userEmail : ''
    })

    const changeInput1 = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            userid:value
        })
    }
    const changeInput2 = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            userpw:value
        })
    }
    const changeInput3 = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            userEmail:value
        })
    }
    const onReset = () => {
        setForm({
            userid : '',
            userpw : '',
            userEmail : ''
        })
        idRef.current.focus();
    }
    
    return (
        <div>
            <input type="text" value={form.userid} onChange={changeInput1} ref={idRef}/>
            <input type="text" value={form.userpw} onChange={changeInput2}/>
            <input type="text" value={form.userEmail} onChange={changeInput3}/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h3>아이디 : {form.userid}</h3>
            <h3>비번 : {form.userpw}</h3>
            <h3>이메일 : {form.userEmail}</h3>
        </div>
    );
};

export default Test5;