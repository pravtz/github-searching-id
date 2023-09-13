'use client'
import {ButtonMain} from "@/components/Button/styled";


type ButtonType = {
    label: string
    onclick: ()=>void
}

export const Button = ({label, onclick}:ButtonType) => {

    return (
        <ButtonMain onClick={onclick}  type={"button"}>
            {label}
        </ButtonMain>
    )
}