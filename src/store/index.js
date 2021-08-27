import { profileReducer } from './uInput';
import { messageReducer } from './message';
import { conversationReducer } from './conversations'
import { createStore, combineReducers } from 'redux';
export * from './uInput'
export const store = createStore(
    combineReducers({
        profile: profileReducer,
        conversations: conversationReducer,
        messages: messageReducer,
    })
);