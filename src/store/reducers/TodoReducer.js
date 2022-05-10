import React from "react";
import {
    TODO_INSERT,
    TODO_UPDATE,
    TODO_UPDATE_TEXT,
    TODO_DELETE,
    TODO_DELETE_ALL,
} from "../actions/ActionTypes";

const initialState = {
    items: [
        {
            id: 1,
            text: "i dont know what happen ? ",
            done: 1,
        },
        {
            id: 2,
            text: "i dont 2222222222222222222222know what happen ? ",
            done: 0,
        },
        {
            id: 3,
            text: "i dont 33333333333 what happen ? ",
            done: 0,
        },
    ]
}


const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_DELETE :
            return {...state, items: state.items.filter((item) => item.id !== action.payload.id)};
        case TODO_INSERT :
            return {...state, items: [...state.items, {id: state.items.length + 1, text: action.payload, done: 0}]}
        case TODO_UPDATE :
            state.items.find((item) => item.id === action.payload.id ? item.done = 1 : "")
            return {...state, items: [...state.items]}
        case TODO_UPDATE_TEXT :
            state.items.find((item) => item.id === action.payload.id ? item.text = action.payload.textEdit : "")
            return {...state, items: [...state.items]}
        case TODO_DELETE_ALL :
            return {...state, items: state.items.filter((item) => item.done !== 1)}
        default :
            return state;
    }
}

export default TodoReducer;