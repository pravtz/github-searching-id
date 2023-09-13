import {fetchWrapperGithub} from "@/lib/fetchWrapperGithub";

const SuggestionRevalidate = 60 * 60 * 24 * 7 //week

type items = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    score: number
}

export type ListUsers = {
    total_count: number,
    incomplete_results: boolean,
    items: items[]
}



export async function getListUsers(query:string,page:number=1,perPage:number=4,order:"desc"|"asc"="desc", sort:"followers"|"repositories"|"joined" ,revalidateTime: number = SuggestionRevalidate ){
    const data = await fetchWrapperGithub<ListUsers>(`search/users?q=${query}&page=${page}&per_page=${perPage}&sort=${sort}`,{
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        },
        next: {
            revalidate: revalidateTime,
        },
    })
    return data
}