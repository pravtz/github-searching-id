'use client'
import {ButtonMain} from "@/components/Button/styled";

type ButtonType = {
    label: string
}

export const Button = ({label}:ButtonType) => {
    return (
        <ButtonMain type={"button"}>
            {label}
        </ButtonMain>
    )
}