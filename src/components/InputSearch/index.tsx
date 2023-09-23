    'use client'
    import {useState} from "react";
    import styled from './styled.module.sass'

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
            <section className={styled.Wrapper}>
                <form className={styled.GroupSearchText} onSubmit={handleSubmit}>
                    <input
                        className={styled.InputSearchText}
                        type="text"
                        id="searchData"
                        placeholder='Digite o username'
                        onChange={handleChange}
                    />
                    <button className={styled.ButtonForm} type={"submit"} >Buscar</button>
                </form>
            </section>
        )
    }