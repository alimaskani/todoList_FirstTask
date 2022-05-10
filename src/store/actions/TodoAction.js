import {
    TODO_GET_ALL,
    TODO_GET_ACTIVE,
    TODO_INSERT,
    TODO_DELETE,
    TODO_UPDATE,
    TODO_UPDATE_TEXT,
    TODO_DELETE_ALL
} from "./ActionTypes";


export const FetchTodoAll = () => ({
    type: TODO_GET_ALL,
})

export const FetchTodoActive = () => ({
    type: TODO_GET_ACTIVE,
})


export const TodoInsert = (text) => ({
    type: TODO_INSERT,
    payload: text
})

export const TodoUpdate = (data) => ({
    type: TODO_UPDATE,
    payload: data
})

export const TodoUpdateText = (data) => ({
    type: TODO_UPDATE_TEXT,
    payload: data
})

export const TodoDelete = (id) => ({
    type: TODO_DELETE,
    payload: id
})


export const TodoDeleteAll = () => ({
    type: TODO_DELETE_ALL,
})
