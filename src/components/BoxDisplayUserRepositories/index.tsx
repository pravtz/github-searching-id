import {Date, Description, GroupDate, Language, Title, Wrapper} from "@/components/BoxDisplayUserRepositories/styled";
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
            <Wrapper>
                <div>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </div>
                <div>
                    <Language>Linguagem: <span>{language}</span> </Language>
                    <GroupDate>
                        <Date>Data de criação: <span>{createAt}</span></Date>
                        <Date>Ultimo Push: <span>{pushedAt}</span></Date>
                    </GroupDate>

                </div>
            </Wrapper>
        </Link>

    )
}