import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SimpleMenu, Start } from '../../components';
import Message from '../message-list/message';
import { Switch, Route, Link } from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { changeMessageValue } from '../../store/conversations/action';
import { makeStyles } from '@material-ui/core';
import '../CSS/App.css';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
            background: theme.light.color,
        },
    }
})
function Chats({ conversation, lastMsg }) {
    const pHolder = 'Text your msg here...';

    const style = useStyles();
    const roomId = useParams();
    return (
        <div className={style.root}>
            <SimpleMenu />
            <header className="App-header">
                <div className="chat-butt">
                    {conversation.map((item, id) => (
                        < ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical contained primary button group"
                            variant="contained"
                        >
                            <Link to={`/Chats/room${id + 1}`} style={{ textDecoration: 'none' }}>
                                <Button><div style={{ flexDirection: ' column' }}>Chatroom - {id + 1}
                                    <div style={{ fontSize: '10px', textAlign: 'right' }}>
                                        {lastMsg[item.title][lastMsg[item.title].length - 1]['author']} : {lastMsg[item.title][lastMsg[item.title].length - 1]['message']}
                                    </div>
                                </div>
                                </Button>
                            </Link>
                        </ButtonGroup>
                    ))}
                </div>
                <Switch>
                    <Route path='/Chats/room1'>
                        <Message defaultText={pHolder} room={roomId.roomId} defValue={conversation} />
                    </Route>
                    <Route path='/Chats/room2'>
                        <Message defaultText={pHolder} room={roomId.roomId} defValue={conversation} />
                    </Route>
                    <Route exact path='/Chats/*'>
                        <h1>404 page</h1>
                    </Route>
                    {/* <Route path={`/Chats/${roomId}`}>
                        <Message defaultText={pHolder} roomId={dialog.roomId} />
                    </Route> */}
                    <Route exact path='/Chats'>
                        <Start className={'container'} mainTitle={"Let's send a message! Select a chat..."} />
                    </Route>
                </Switch>

            </header>
        </div >
    )
}
function mapStateToProps(state) {
    return {
        conversation: state.conversations.conversations,
        lastMsg: state.messages.messages,
    }
};
function mapDispatchToProps(dispatch) {
    return {
        ChangeText: () => dispatch(changeMessageValue())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Chats);