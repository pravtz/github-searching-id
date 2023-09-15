'use client'

import {Content, Wrapper, GroupDisplayUserData} from "@/components/ScreenUser/styled";
import {NavigationLink} from "@/components/NavigationLink";
import {BoxProfileUser} from "@/components/BoxProfileUser";
import {BoxDisplayUserData} from "@/components/BoxDisplayUserData";


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
                <GroupDisplayUserData>
                    <BoxDisplayUserData title={"Seguidores"} value={2} />
                    <BoxDisplayUserData title={"Repositórios"} value={86} />
                </GroupDisplayUserData>
            </Content>

        </Wrapper>
    )
}