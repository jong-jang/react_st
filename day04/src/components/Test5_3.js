import React, { useRef, useState } from 'react';
// 3단계
const Test5 = () => {
    const idRef = useRef();
    const [form, setForm] = useState({
        userid : '',
        userpw : '',
        userEmail : ''
    })
    // form.userid, form.userpw, form['userEmail']
    // 비구조할당
    const {userid, userpw, userEmail} = form

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
            <input type="text" value={userid} onChange={changeInput1} ref={idRef}/>
            <input type="text" value={userpw} onChange={changeInput2}/>
            <input type="text" value={userEmail} onChange={changeInput3}/>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h3>아이디 : {userid}</h3>
            <h3>비번 : {userpw}</h3>
            <h3>이메일 : {userEmail}</h3>
        </div>
    );
};

export default Test5;