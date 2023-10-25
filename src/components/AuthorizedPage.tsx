import React from "@testing-library/react";
import {redirect, useNavigate} from "react-router-dom";
import {user} from "../App";
import {useEffect} from "react";

export function AuthorizedPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.login) {
            navigate('/login');
        }
    })

    return (
        <div className='fact'>
            <h1>Самый интересный факт!</h1>
            <p>В каждой стране к кофе добавляют разные компоненты: в Италии – сахар, в Мексике – корицу, в Германии и Швейцарии – горячий шоколад, в Бельгии – пьют, закусывая шоколадом. В Эфиопии к кофе добавляют соль, в Марокко – перец. На ближнем Востоке к напитку добавляют кардамон и разные специи. Со взбитыми сливками кофейничают в Австрии.</p>

            <img src="/coffee.jpg" alt=""/>
        </div>
    )
}