import { CHANGE_MESSAGE_VALUE, CLEAR_MESSAGE_VALUE } from './types';
const initialState = {
    conversations: [
        { title: 'room1', value: '' },
        { title: 'room2', value: 'test value-2' },
    ],
};

export function conversationReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MESSAGE_VALUE:
            return {
                ...state,
                conversations: state.conversations.map((item) => {
                    return item.title === action.payload.roomId
                        ? { ...item, value: action.payload.value }
                        : item
                })
            }
        case CLEAR_MESSAGE_VALUE:
            return {
                ...state,
                conversations: state.conversations.map((item) => {
                    return item.title === action.payload
                        ? { ...item, value: "" }
                        : item
                })
            }
        default:
            return state;
    }
};