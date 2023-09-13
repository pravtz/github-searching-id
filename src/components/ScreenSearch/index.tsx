'use client'

import {Wrapper} from "./styled";
import {NavigationLink} from "@/components/NavigationLink";
import {InputSearch} from "@/components/InputSearch";

export const ScreenSearch = () => {
    const handlerSearch = async (data: string) => {
        console.log(data)
    }

    return (
        <Wrapper>
            <NavigationLink name="Sair" href="/" />
            <InputSearch handlerSearchUsers={handlerSearch}/>
        </Wrapper>
    )
}