'use client'

import {GroupCards, Wrapper} from "./styled";
import {NavigationLink} from "@/components/NavigationLink";
import {InputSearch} from "@/components/InputSearch";
import {MenuLine} from "@/components/MenuLine";
import {CardSearch} from "@/components/CardSearch";
import {useCallback, useState} from "react";
import {getSearchUser, ListUsersAxiosType} from "@/services/api.axios.github.com/getSearchUser";
import {getAxiosUser, GetUserAxiosType} from "@/services/api.axios.github.com/getUser";


export const ScreenSearch = () => {
    const [dataListSearchUser, setDataListSearchUser] = useState<ListUsersAxiosType>()
    const [dataUsers, setDataUsers] = useState<GetUserAxiosType[]>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const perPage: number = 2

    const itemA: any = localStorage.getItem('LOCAL')
    const resultLocal = JSON.parse(itemA)
    console.log('itemA', resultLocal)


    const usersSearchList = useCallback(async (query: string, currentPag: number) => {
        console.log("passei por aqui", currentPag)
        await getSearchUser(query, currentPag, perPage, "desc", "joined")
            .then(async (response) => {
                const result = response.data
                setDataListSearchUser(result)

                if (result != undefined) {

                    const arr: GetUserAxiosType[] = []

                    for await(const res of result.items) {
                        await getAxiosUser(res.login).then(
                            (response) => {
                                const resultmap = response.data
                                arr.push(resultmap)
                            }
                        )
                    }
                    setDataUsers(arr)
                }
            })
    }, [])


    const handlerSearch = async (data: string) => {
        await usersSearchList(data, currentPage)
    }

    const arrayRecentSearches = resultLocal
    const arrayCurrentSearches = dataUsers
    const totalCurrentCards = dataListSearchUser?.total_count
    const totalRecentCards = 2
    return (
        <Wrapper>
            <NavigationLink name="Sair" href="/"/>
            <InputSearch handlerSearchUsers={handlerSearch}/>

            <MenuLine isEmpty={!totalRecentCards} title={"Buscas Recentes"}>
                <GroupCards>
                    {arrayRecentSearches.map((item: any) => {
                        return (
                            <CardSearch key={item.id} name={item.name} login={item.login} location={item.location}
                                        image={{src: item.avatar_url, alt: item.login}}/>
                        )
                    })}
                </GroupCards>
            </MenuLine>

            <MenuLine isEmpty={!totalCurrentCards} title={"Buscas"} isStartOpen={true}>
                <GroupCards>
                    {arrayCurrentSearches != undefined && arrayCurrentSearches.map((item) => {
                        return (
                            <CardSearch key={item.id} name={item.name} login={item.login} location={item.location}
                                        image={{src: item.avatar_url, alt: item.login}}/>
                        )
                    })}
                </GroupCards>

            </MenuLine>

        </Wrapper>
    )
}