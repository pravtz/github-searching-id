import {ScreenUser} from "@/components/ScreenUser";
import {BoxProfileUserType} from "@/components/BoxProfileUser";
import {getAxiosUser, GetUserAxiosType} from "@/services/api.axios.github.com/getUser";
import {getAxiosRepositories, RepositoriesDataAxiosType} from "@/services/api.axios.github.com/getRepositories";


export type DataFullUserProfile = BoxProfileUserType & {
    followers: number
    amountPublicRepos: number
}

export default async function Page({params}: { params: { username: string[] } }) {

    const getDataUserWithAxios = async (username: string): Promise<GetUserAxiosType> => {
        const res = await getAxiosUser(username)
        return res.data
    }
    const getDataRepositoriesWithAxios = async (username:string, page: number):Promise<RepositoriesDataAxiosType[]> => {
        const res= await getAxiosRepositories(username,4,page)
        return res.data
    }

    const data: GetUserAxiosType = await getDataUserWithAxios(params.username[0])
    const dataRepositories = await getDataRepositoriesWithAxios(params.username[0],parseInt(params.username[1]))


    const user: DataFullUserProfile = {
        name: data.name !== null ? data.name : "Anônimo",
        login: data.login,
        id: data.id,
        location: data.location,
        avatarUrl: {
            src: data.avatar_url,
            alt: `Imagem avatar de ${data.name}`
        },
        amountPublicRepos: data.public_repos,
        followers: data.followers
    }

    return (
        <ScreenUser userData={user} dataRepositories={dataRepositories} page={params.username[1]}/>
    )
}