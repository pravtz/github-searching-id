import api from "@/lib/apiBaseAxios";

export type items = {
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

export type ListUsersAxiosType = {
    total_count: number,
    incomplete_results: boolean,
    items: items[]
}

export const getSearchUser = async (query:string,page:number,perPage:number,order:"desc"|"asc"="desc", sort:"followers"|"repositories"|"joined")=> {
    return await api.get<ListUsersAxiosType>(`search/users?q=${query}&page=${page}&per_page=${perPage}&sort=${sort}`)
}