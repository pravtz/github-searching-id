import styled from "./styled.module.sass";


type ButtonType = {
    label: string
    onclick: ()=>void
}

export const Button = ({label, onclick}:ButtonType) => {

    return (
        <button className={styled.buttonMain} onClick={onclick}  type={"button"}>
            {label}
        </button>
    )
}