import React from "react";
import Header from "./components/header/Header";
import TodoList from "./components/todo/TodoList";
import './App.css';
import {Route, Routes} from "react-router";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/">
                    <Route path="/" element={<TodoList />} />
                    <Route path="/active" element={<TodoList />} />
                </Route>
            </Routes>

        </>
    );
}

export default App;
