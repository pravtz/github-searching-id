'use client'

import {GroupCards, Wrapper} from "./styled";
import {NavigationLink} from "@/components/NavigationLink";
import {InputSearch} from "@/components/InputSearch";
import {MenuLine} from "@/components/MenuLine";
import {CardSearch} from "@/components/CardSearch";
import {useCallback, useState} from "react";
import {getSearchUser, ListUsersAxiosType} from "@/services/api.axios.github.com/getSearchUser";
import {getAxiosUser, GetUserAxiosType} from "@/services/api.axios.github.com/getUser";
import {PaginateSearch} from "@/components/PaginateSearch";


const mocktest = [

    {
        name: "Ederson Oliveira Pravtz",
        login: "pravtz",
        location: "Brasil",
        image: {
            src: "https://avatars.githubusercontent.com/u/32251704?v=4",
            alt: "foto Ederson"
        }

    },
    {
        name: "Ederson Oliveira Pravtz",
        login: "pravtz",
        location: "Brasil",
        image: {
            src: "https://avatars.githubusercontent.com/u/32251704?v=4",
            alt: "foto Ederson"
        }

    }, {
        name: "Ederson Oliveira Pravtz",
        login: "pravtz",
        location: "Brasil",
        image: {
            src: "https://avatars.githubusercontent.com/u/32251704?v=4",
            alt: "foto Ederson"
        }

    }

]

export const ScreenSearch = () => {
    const [dataListSearchUser, setDataListSearchUser] = useState<ListUsersAxiosType>()
    const [dataUsers, setDataUsers] = useState<GetUserAxiosType[]>()
    const [fetch, setFeatch] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const perPage: number = 2

    const nextPage = (): void => {
        setCurrentPage(currentPage + 1)
        console.log('currentPage', currentPage)
    }
    const priorPage = (): void => {
        setCurrentPage(currentPage - 1)
    }


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
    }, [currentPage, dataListSearchUser, ])


    const handlerSearch = async (data: string) => {
        setFeatch(true)
        await usersSearchList(data, currentPage)
        setFeatch(false)
    }
    console.log("dataUsers", dataUsers)
    console.log("dataListSearchUser", dataListSearchUser)


    const arrayRecentSearches = mocktest
    const arrayCurrentSearches = dataUsers
    const totalCurrentCards = dataListSearchUser?.total_count
    const totalRecentCards = 2
    return (
        <Wrapper>
            <NavigationLink name="Sair" href="/"/>
            <InputSearch handlerSearchUsers={handlerSearch}/>

            <MenuLine isEmpty={!totalRecentCards} title={"Buscas Recentes"}>
                <GroupCards>
                    {arrayRecentSearches.map((item, index) => {
                        return (
                            <CardSearch key={index} name={item.name} login={item.login} location={item.location}
                                        image={item.image}/>
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

                {<PaginateSearch
                    totalItems={dataListSearchUser?.total_count}
                    currentPage={currentPage}
                    perPage={perPage}
                    onclickNextPage={nextPage}
                    onclickPreviousPage={priorPage}/>}
            </MenuLine>

        </Wrapper>
    )
}