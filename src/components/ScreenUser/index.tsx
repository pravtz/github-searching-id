'use client'

import {Content, Wrapper} from "@/components/ScreenUser/styled";
import {NavigationLink} from "@/components/NavigationLink";
import {BoxProfileUser} from "@/components/BoxProfileUser";


export const ScreenUser = () => {

    return (
        <Wrapper>
            <NavigationLink name="Voltar" href="/search" />
            <Content>
                <BoxProfileUser
                    name={"Ederson Oliveura Pravtz"}
                    login={"pravtz"}
                    id={32251704}
                    location={"Brasil"}
                    avatarUrl={{
                        src:"https://avatars.githubusercontent.com/u/32251704?v=4",
                        alt:"Foto de Ederson"
                    }}
                />
            </Content>
        </Wrapper>
    )
}