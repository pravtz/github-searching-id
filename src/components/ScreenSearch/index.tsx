'use client'

import {GroupCards, Wrapper} from "./styled";
import {NavigationLink} from "@/components/NavigationLink";
import {InputSearch} from "@/components/InputSearch";
import {getListUsers} from "@/services/api.github.com/getListUsers";
import {MenuLine} from "@/components/MenuLine";
import {CardSearch} from "@/components/CardSearch";



const mocktest = [

    {
        name: "Ederson Oliveira Pravtz",
        login: "pravtz",
        location: "Brasil",
        image: {
            src:"https://avatars.githubusercontent.com/u/32251704?v=4",
            alt: "foto Ederson"
        }

    },
    {
        name: "Ederson Oliveira Pravtz",
        login: "pravtz",
        location: "Brasil",
        image: {
            src:"https://avatars.githubusercontent.com/u/32251704?v=4",
            alt: "foto Ederson"
        }

    },{
        name: "Ederson Oliveira Pravtz",
        login: "pravtz",
        location: "Brasil",
        image: {
            src:"https://avatars.githubusercontent.com/u/32251704?v=4",
            alt: "foto Ederson"
        }

    }

]

export const ScreenSearch = () => {
    const handlerSearch = async (data: string) => {
        //const dataAll = await getListUsers(data,1,3,"desc", "joined")

    }
    const arrayRecentSearches = mocktest
    const arrayCurrentSearches = mocktest

    const amountCards = arrayRecentSearches.length
    return (
        <Wrapper>
            <NavigationLink name="Sair" href="/" />
            <InputSearch handlerSearchUsers={handlerSearch}/>

            <MenuLine isEmpty={!amountCards} title={"Buscas Recentes"}>
                <GroupCards >
                {arrayRecentSearches.map((item,index)=>{
                    return (
                            <CardSearch key={index} name={item.name} login={item.login} location={item.location} image={item.image}/>
                    )
                })}
                </GroupCards>
            </MenuLine>

            <MenuLine isEmpty={!amountCards} title={"Buscas"} isStartOpen={true}>
                <GroupCards >
                    {arrayCurrentSearches.map((item,index)=>{
                        return (
                            <CardSearch key={index} name={item.name} login={item.login} location={item.location} image={item.image}/>
                        )
                    })}
                </GroupCards>
            </MenuLine>

        </Wrapper>
    )
}