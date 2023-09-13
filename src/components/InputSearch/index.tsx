'use client'
import {Wrapper, InputSearchText, GroupSearchText, ButtonForm} from "@/components/InputSearch/styled";
import {useState} from "react";

type InputSearchType = {
    handlerSearchUsers: (data: string) => void
}

export const InputSearch = ({handlerSearchUsers}:InputSearchType ) => {
    const [data, setData] = useState<string>('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handlerSearchUsers(data)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value)
    }

    return (
        <Wrapper>
            <GroupSearchText onSubmit={handleSubmit}>
                <InputSearchText
                    type="text"
                    id="searchData"
                    placeholder='Digite o username'
                    onChange={handleChange}
                />
                <ButtonForm type={"submit"} >Buscar</ButtonForm>
            </GroupSearchText>
        </Wrapper>
    )
}