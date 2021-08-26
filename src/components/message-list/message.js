import { connect, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
import { changeMessageValue, clearMessageValue } from '../../store/conversations/action';
import { sendMessageValue } from '../../store/message/action';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import logo from '../logo/logo.svg';
import '../CSS/App.css';

function Message({ defaultText, arrMsg, room, defValue }) {
    const useStyles = makeStyles((theme) => {
        return {
            root: {
                flexGrow: 1,
                background: theme.light.color,
            },
        }
    })
    const MyButton = styled(Button)({
        background: 'linear-gradient(20deg, #61dafb 25%, #16424f 95%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        fontSize: 20,
        // height: 48,
        padding: '0 30px',
    });
    const style = useStyles();
    const messages = arrMsg[room] || [];
    const value = defValue.find((item) => item.title === room).value || '';
    const dispatch = useDispatch();
    function sendMessage() {
        if (value) {
            dispatch(sendMessageValue({ author: 'Слава', message: value, }, room))
            dispatch(clearMessageValue(room))
        }
    }
    return (
        <div className={style.root}>
            <header className="home-header">
                <h2 style={{ color: '#61dafb' }}>{`Chat-${room}`}</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-container">
                    <TextField TextField id="filled-basic" label={defaultText} variant="filled" className='inp' value={value} onChange={(e) => { dispatch(changeMessageValue(e.target.value, room)) }}></TextField>
                    <MyButton variant="contained" color="primary" href="#contained-buttons" onClick={sendMessage}>Send</MyButton>
                </div>
                {messages.map((item, id) => (

                    < p key={id} > {item.author}: <div className="msgBox">
                        {item.message}
                        <p className="date">{item.id.getHours()} : {item.id.getMinutes()}</p>
                    </div></p>
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
function mapStateToProps(state) {
    return {
        arrMsg: state.messages.messages,
        value: state.conversations.conversations
    }
};
function mapDispatchToProps(dispatch) {
    return {
        // actionClick: () => dispatch(ClickTheCheckBox())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Message);