import React from "@testing-library/react";
import {user} from "../App";

export function LoginPage() {
    return (
        <div className='fact'>
            <h1 className='title_fact'>Войдите в свою учетную запись, пожалуйста!</h1>
            <button onClick={() => user.login = true}>Логин</button>
        </div>
    )
}