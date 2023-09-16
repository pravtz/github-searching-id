'use client'

import {GroupCards, Wrapper} from "./styled";
import {NavigationLink} from "@/components/NavigationLink";
import {InputSearch} from "@/components/InputSearch";
import {getListUsers, ListUsers} from "@/services/api.github.com/getListUsers";
import {MenuLine} from "@/components/MenuLine";
import {CardSearch} from "@/components/CardSearch";
import {useState} from "react";
import {getUser, GetUserType} from "@/services/api.github.com/getUser";



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
    const [data,setData] = useState<ListUsers | null>(null)
    const [data2, setData2] = useState<GetUserType[]>()
    const handlerSearch = async (data: string) => {
        const dataAll = await getListUsers(data,1,2,"desc", "joined")
        const result:any = []
        dataAll.items.map(async (item)=>{
            const value = await getUser(item.login)
            result.push(value)
        })

        setData2(result)
        setData(dataAll)
    }
    console.log(data2)

    const arrayRecentSearches = mocktest
    const arrayCurrentSearches = data2
    const totalCurrentCards = data?.total_count
    const totalRecentCards = arrayRecentSearches.length
    return (
        <Wrapper>
            <NavigationLink name="Sair" href="/" />
            <InputSearch handlerSearchUsers={handlerSearch}/>

            <MenuLine isEmpty={!totalRecentCards} title={"Buscas Recentes"}>
                <GroupCards >
                {arrayRecentSearches.map((item,index)=>{
                    return (
                            <CardSearch key={index} name={item.name} login={item.login} location={item.location} image={item.image}/>
                    )
                })}
                </GroupCards>
            </MenuLine>

            <MenuLine isEmpty={!totalCurrentCards} title={"Buscas"} isStartOpen={true}>
                <GroupCards >
                    {arrayCurrentSearches?.map((item,index)=>{
                        return (
                            <CardSearch key={index} name={item.name} login={item.login} location={item.location} image={{src:item.avatar_url,alt:item.login}}/>
                        )
                    })}
                </GroupCards>
            </MenuLine>

        </Wrapper>
    )
}