import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TodoDelete, TodoDeleteAll, TodoInsert, TodoUpdate, TodoUpdateText} from "../../store/actions/TodoAction";
import {Link, useLocation} from "react-router-dom";


const TodoList = () => {

    const todo = useSelector(state => state.TodoState.items)
    const dispatch = useDispatch();
    let location = useLocation();

    let activate_items = []
    if (location.pathname === "/active") {
        activate_items = todo.filter(item => item.done == 0)
    }

    const [text, setText] = useState('');
    const [textEdit, setTextEdit] = useState('');
    const [error, setError] = useState(false)

    const handleInsert = (text) => {
        if (text.length < 3) {
            setError(true)
        } else {
            setError(false)
            setText('')
            dispatch(TodoInsert(text))
        }
    }
    const handleUpdate = (id) => {
        dispatch(TodoUpdate({id}))
    }
    const handleUpdateText = (id) => {
        dispatch(TodoUpdateText({id, textEdit}))
        setTextEdit("")
    }
    const handleDelete = (id) => {
        dispatch(TodoDelete({id}))
    }
    const handleDeleteAll = () => {
        dispatch(TodoDeleteAll())
    }

    return (
        <div className="box-todo">
            <h1 className="title">Todo</h1>
            {
                error ?
                    <h3 style={{color: "red", textAlign: "center"}}>Minimum letters to add 3 letters. </h3>
                    : <> </>
            }
            <div className="todo-lists">
                <div className="header"></div>
                <div className="body">
                    <div className="todo-list create">
                        <input type="text"
                               onChange={(e) => setText(e.target.value)}
                               value={text}
                               onKeyPress={event => {
                                   if (event.key === 'Enter') {
                                       handleInsert(text)
                                   }
                               }}
                               placeholder="What needs to be done ?"/>
                    </div>
                    {
                        location.pathname == "/" ?
                            todo.map((item, index) => {
                                return (
                                    <div id={item.id} key={index}
                                         className="todo-list border">
                                        <div className="check">
                                            {item.done ?
                                                <></>
                                                :
                                                <input className="checkbox"
                                                       onChange={() => handleUpdate(item.id, item.text)}
                                                       type="checkbox"/>
                                            }
                                            <input className="info"
                                                   onChange={(e) => setTextEdit(e.target.value)}

                                                   onBlur={() => {
                                                       if (textEdit.length < 3) {
                                                           setError(true)
                                                       } else {
                                                           setError(false)
                                                           handleUpdateText(item.id)
                                                       }
                                                   }}
                                                   type="text" readOnly={item.done ? true : false}
                                                   placeholder={item.text}/>

                                        </div>
                                        <img onClick={() => handleDelete(item.id)} className="icon-delete"
                                             src="img/close.svg" alt=""/>
                                    </div>
                                )
                            })
                            :
                            todo.map((item, index) => {
                                return (
                                    <div id={item.id} key={index} className="todo-list border">
                                        <div className="check">
                                            {item.done ?
                                                <></>
                                                :
                                                <input onChange={() => handleUpdate(item.id, item.text)}
                                                       type="checkbox"/>
                                            }
                                            <input className="info"
                                                   onChange={(e) => setTextEdit(e.target.value)}

                                                   onBlur={() => {
                                                       if (textEdit.length < 3) {
                                                           setError(true)
                                                       } else {
                                                           setError(false)
                                                           handleUpdateText(item.id)
                                                       }
                                                   }}
                                                   type="text" readOnly={item.done ? true : false}
                                                   placeholder={item.text}/>
                                        </div>
                                        <img onClick={() => handleDelete(item.id)} className="icon-delete"
                                             src="img/close.svg" alt=""/>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
            <div className="action-box">
                <div className="count">
                    <span>{todo.length}</span>
                    items left
                </div>
                <div className="filter">
                    <Link to="/" className={location.pathname == "/" ? "active" : ""}>All</Link>
                    <Link to="/active" className={location.pathname == "/active" ? "active" : ""}>Active</Link>
                </div>
                <div className="delete">
                    <button onClick={() => handleDeleteAll()}>Clear completed</button>
                </div>
            </div>
        </div>

    )
}

export default TodoList