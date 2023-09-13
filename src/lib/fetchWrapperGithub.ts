export async function fetchWrapperGithub<T = unknown>(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
) {
    const data = await fetch(`https://api.github.com/${input}`, init)
    const result = await data.json()
    return result as T
}