import thunk from 'redux-thunk';
import { gistsReducer } from './gists'
import { profileReducer } from './uInput';
import { messageReducer } from './message';
import { conversationReducer } from './conversations'
import { logger, botSendMessage } from './middlewares';
import { createStore, combineReducers, applyMiddleware } from 'redux';
export * from './uInput'
export const store = createStore(
    combineReducers({
        profile: profileReducer,
        conversations: conversationReducer,
        messages: messageReducer,
        gists: gistsReducer,
    }),

    applyMiddleware(thunk, logger, botSendMessage)
);