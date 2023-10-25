import React from 'react';
import './App.css';
import {NavLink, redirect, Route, Routes} from "react-router-dom";
import {ContainerFacts} from "./components/ContainerFacts";
import {FactPage} from "./components/FactPage";
import {LoginPage} from "./components/LoginPage";
import {Page404} from "./components/Page404";
import {AuthorizedPage} from "./components/AuthorizedPage";

export const user = {
    login: false
};

function App() {
    return (
        <div className="App">
            <header>
                <p><NavLink to="/" className={({isActive}) => isActive ? 'active' : 'pending'}>Главная</NavLink></p>
                <p><NavLink to="/login" className={({isActive}) => isActive ? 'active' : 'pending'}>Войти</NavLink></p>
                <p><NavLink to="/autho" className={({isActive}) => isActive ? 'active' : 'pending'}>Интересный факт</NavLink></p>
            </header>
            <Routes>
                <Route path="/"
                       element={<ContainerFacts/>}/>
                <Route path="/fact/:id"
                       element={<FactPage/>}/>
                <Route path="/login"
                       element={<LoginPage/>}/>
                <Route path="/autho"
                       element={<AuthorizedPage/>}/>
                <Route path='*'
                       element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default App;