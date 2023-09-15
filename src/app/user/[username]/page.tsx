import {ScreenUser} from "@/components/ScreenUser";
import {getUser} from "@/services/api.github.com/getUser";
import {BoxProfileUserType} from "@/components/BoxProfileUser";
import {getListRepositoriesUser} from "@/services/api.github.com/getListRepositoriesUser";
import {BoxDisplayUserRepositoriesType} from "@/components/BoxDisplayUserRepositories";

export type DataFullUserProfile = BoxProfileUserType & {
    followers: number
    amountPublicRepos: number
}




export default async function Page({ params }: { params: { username: string } }) {

    const data = await getUser(params.username)
    const dataRepositories = await  getListRepositoriesUser(params.username)

    console.log(dataRepositories)

    const user:DataFullUserProfile ={
        name: data.name,
        login: data.login,
        id: data.id,
        location: data.location,
        avatarUrl:{
            src:data.avatar_url,
            alt: `Imagem avatar de ${data.name}`
        },
        amountPublicRepos: data.public_repos,
        followers: data.followers
    }



    return (
        <ScreenUser userData={user} dataRepositories={dataRepositories}/>
    )
}