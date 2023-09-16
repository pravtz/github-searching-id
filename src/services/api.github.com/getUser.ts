import {fetchWrapperGithub} from "@/lib/fetchWrapperGithub";

const SuggestionRevalidate = 60 * 60 * 24 * 7 //week

export type GetUserType = {
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
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string | null,
    hireable: boolean | null,
    bio: string | null,
    twitter_username: string | null,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}

export async function getUser(username: string, revalidateTime: number = SuggestionRevalidate){
    const data:GetUserType = await fetchWrapperGithub<GetUserType>(`users/${username}`,{
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        },
        next: {
            revalidate: revalidateTime,
        }
    })
    return data

}