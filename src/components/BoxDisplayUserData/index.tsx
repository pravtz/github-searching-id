import styled from './styled.module.sass'

type BoxDisplayUserDataType = {
    title: string
    value: number
}

export const BoxDisplayUserData = ({title,value}:BoxDisplayUserDataType) => {
    return (
        <section className={ styled.wrapper}>
            <p className={styled.title}>{title}</p>
            <p className={styled.value}>{value}</p>
        </section>
    )
}