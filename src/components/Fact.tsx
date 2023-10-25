import React from "@testing-library/react";
import {FactInterface} from "./ContainerFacts";

export function Fact(props: FactInterface) {
    return (
        <div className='fact'>
            <p className='title_fact'>{props.title}</p>
            <p className='description_fact'>{props.description}</p>
        </div>
    )
}