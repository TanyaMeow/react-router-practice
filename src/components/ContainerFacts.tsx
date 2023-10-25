import React from "@testing-library/react";
import {Fact} from "./Fact";
import {Link} from "react-router-dom";

export interface FactInterface {
    id: number,
    title: string,
    description: string
}

export function ContainerFacts() {
    const facts: FactInterface[] = [
        {
            id: 1,
            title: 'Факт 1. Кофейные деревья',
            description: 'Кофейные деревья могут вырастать до девяти метров. Для удобства сборки зерен большинство производителей отдают предпочтение низким деревьям'
        },
        {
            id: 2,
            title: 'Факт 2. Американо',
            description: 'Такой любимый многими кофе «американо», вариаций которого сегодня довольно много, появился во время войны в 40-х годах.'
        },
        {
            id: 3,
            title: 'Факт 3. Эспрессо',
            description: 'Стоит сказать, что эспрессо содержит меньшее количество кофеина, чем кофе, приготовленное «капельным методом». '
        },
        {
            id: 4,
            title: 'Факт 4. Кофейные сочетания',
            description: ' Кофейный напиток включает приблизительно 800 ароматических сочетаний – огромное количество, не так ли?'
        },
        {
            id: 5,
            title: 'Факт 5. Антиоксиданты',
            description: 'В одной порции кофе содержится несколько сотен антиоксидантов. Их полный вывод из организма осуществляется на протяжении месяца.'
        },
        {
            id: 6,
            title: 'Факт 6. Любителям кофе',
            description: 'А знаете ли вы о том, что любители кофейного напитка значительно реже посещают стоматологические кабинеты. Ведь в кофе есть элементы, которые не позволяют бактериям оседать на зубах.'
        }
    ];

    return (
        <div className="block_facts">
            <h1>Факты о кофе</h1>
            <div className="container_facts">
                {facts.map((fact: FactInterface, key: number): any =>
                    <Link to={`/fact/${fact.id}`}
                          key={key}>

                        <Fact id={fact.id}
                              title={fact.title}
                              description={''}/>

                    </Link>
                )}
            </div>
        </div>
    )
}