import styled from "./styled.module.sass";
import Link from 'next/link'

export type BoxDisplayUserRepositoriesType = {
    title: string
    description: string
    language: string
    pushedAt: string
    createAt: string
    htmlUrl: string
}

export const BoxDisplayUserRepositories = ({createAt,description,language,pushedAt,title, htmlUrl}:BoxDisplayUserRepositoriesType) => {
    return (
        <Link href={htmlUrl} passHref prefetch={false}>
            <div className={styled.wrapper}>
                <div>
                    <h2 className={styled.title}>{title}</h2>
                    <p className={styled.description}>{description}</p>
                </div>
                <div>
                    <p className={styled.language}>Linguagem: <span>{language}</span> </p>
                    <div className={styled.groupDate}>
                        <div className={styled.date}>Data de criação: <span>{createAt}</span></div>
                        <div className={styled.date}>Ultimo Push: <span>{pushedAt}</span></div>
                    </div>

                </div>
            </div>
        </Link>

    )
}