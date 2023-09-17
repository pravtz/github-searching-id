'use client'

import {
    Content,
    Wrapper,
    GroupDisplayUserData,
    Line,
    ContentRepository,
} from "@/components/ScreenUser/styled";
import {NavigationLink} from "@/components/NavigationLink";
import {BoxProfileUser} from "@/components/BoxProfileUser";
import {BoxDisplayUserData} from "@/components/BoxDisplayUserData";
import {BoxDisplayUserRepositories} from "@/components/BoxDisplayUserRepositories";
import {DataFullUserProfile} from "@/app/user/[...username]/page"
import {RepositoriesDataType} from "@/services/api.github.com/getListRepositoriesUser";
import {FormatDate} from "@/helper/FormatDate";
import {Pagination} from "@/components/Pagination";

type ScreenUserType = {
    userData: DataFullUserProfile
    dataRepositories: RepositoriesDataType[]
    page: string
}

export const ScreenUser = async ({userData, dataRepositories, page}:ScreenUserType,) => {

    return (
        <Wrapper>
            <NavigationLink name="Voltar" href="/search" />
            <Content>
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
                <GroupDisplayUserData>
                    <BoxDisplayUserData title={"Seguidores"} value={userData.followers} />
                    <BoxDisplayUserData title={"Repositórios"} value={userData.amountPublicRepos} />
                </GroupDisplayUserData>
                <Line/>
                <ContentRepository>
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
                </ContentRepository>
            </Content>
            <Pagination amountPublicRepos={userData.amountPublicRepos } page={parseInt(page)}/>
        </Wrapper>
    )
}