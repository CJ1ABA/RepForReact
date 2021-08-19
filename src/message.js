import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';



function Message({ defaultAuth, defaultText, chatAdmin }) {


    const [messageList, setmessageList] = useState([{
        Author: chatAdmin,
        Msg: 'Привет)',
    },]);

    const [inputValueAuth, setinputValueAuth] = useState();

    const [inputValueTxt, setinputValueTxt] = useState();

    const clickSend = function () {

        setmessageList((state) => [...state, { Author: inputValueAuth, Msg: inputValueTxt }])
        // console.log(inputValueAuth);
        // console.log(inputValueTxt);
        setinputValueAuth("");
        setinputValueTxt("");
    }

    const changeInpAuth = function (e) {
        setinputValueAuth(e.target.value)
        isDisabled(e.target.value)
    }

    const changeInpTxt = function (e) {
        setinputValueTxt(e.target.value)
    }

    const isDisabled = function (arg) {
        if (arg) {
            return true
        } else return false
    }

    useEffect(() => {
        let [lastItem] = messageList.slice(-1);
        // console.log('useEffect');
        // console.log(lastItem);
        setTimeout(() => {
            if (!(lastItem['Author'] === 'чат-Робот')) {
                setmessageList((state) => [...state, { Author: chatAdmin, Msg: 'Your message has been received' }])
            }
        }, 1500)
    }, [messageList]);


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-container">
                    <input type='text' className='inp' placeholder={defaultAuth} value={inputValueAuth} onChange={changeInpAuth}></input>
                    <input type='text' className='inp' placeholder={defaultText} value={inputValueTxt} onChange={changeInpTxt}></input>
                    <button className="App-butt" onClick={clickSend} disabled={!inputValueAuth}>Send</button>
                </div>
                {messageList.map((item, id) => (
                    <p> {item.Author}: <div className="msgBox">{item.Msg}</div></p>
                ))}
                < a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn how to send message!
                </a>
            </header>
        </div >
    );
}
export default Message;