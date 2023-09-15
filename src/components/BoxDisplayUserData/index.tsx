import {Wrapper,Value,Title} from "@/components/BoxDisplayUserData/styled";

type BoxDisplayUserDataType = {
    title: string
    value: number
}

export const BoxDisplayUserData = ({title,value}:BoxDisplayUserDataType) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Value>{value}</Value>
        </Wrapper>
    )
}