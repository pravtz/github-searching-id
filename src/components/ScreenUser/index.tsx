'use client'
import styled from './styled.module.sass'
import {NavigationLink} from "@/components/NavigationLink";
import {BoxProfileUser} from "@/components/BoxProfileUser";
import {BoxDisplayUserData} from "@/components/BoxDisplayUserData";
import {BoxDisplayUserRepositories} from "@/components/BoxDisplayUserRepositories";
import {DataFullUserProfile} from "@/app/user/[...username]/page"
import {RepositoriesDataType} from "@/services/api.github.com/getListRepositoriesUser";
import {FormatDate} from "@/helper/FormatDate";
import {Pagination} from "@/components/Pagination";
import {useItemsLocalStorage} from "@/hooks/useItensLocalStorage";
import {useCallback, useEffect, useState} from "react";

type ScreenUserType = {
    userData: DataFullUserProfile
    dataRepositories: RepositoriesDataType[]
    page: string
}

export const ScreenUser =  ({userData, dataRepositories, page}:ScreenUserType,) => {
    const {items, SetItem} = useItemsLocalStorage()


    useEffect(() => {
        return SetItem(userData)
    }, [userData]);
    console.log("items",items)



    return (
        <div className={styled.Wrapper}>
            <NavigationLink name="Voltar" href="/search" />
            <section className={styled.Content}>
                <BoxProfileUser
                    name={userData.name}
                    login={userData.login}
                    id={userData.id}
                    location={userData.location}
                    avatarUrl={{
                        src:userData.avatarUrl.src,
                        alt:userData.avatarUrl.alt
                    }}
                />
                <div className={styled.GroupDisplayUserData}>
                    <BoxDisplayUserData title={"Seguidores"} value={userData.followers} />
                    <BoxDisplayUserData title={"Repositórios"} value={userData.amountPublicRepos} />
                </div>
                <div className={styled.Line}/>
                <div className={styled.ContentRepository}>
                    {dataRepositories.map((item)=>{
                        return (
                            <BoxDisplayUserRepositories
                                key={item.id}
                                title={item.name}
                                description={item.description}
                                language={item.language}
                                createAt={FormatDate(item.created_at)}
                                pushedAt={FormatDate(item.pushed_at)}
                                htmlUrl={item.html_url}
                            />
                        )
                    })}
                </div>
            </section>
            <Pagination amountPublicRepos={userData.amountPublicRepos } page={parseInt(page)}/>
        </div>
    )
}