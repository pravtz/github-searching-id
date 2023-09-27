'use client'
import {NavigationButton} from "@/components/NavigationButton";
import {useRouter} from "next/navigation";
import styled from "./styled.module.sass";

type PaginationType = {
    amountPublicRepos: number
    page: number
}

export const Pagination = ({amountPublicRepos, page}:PaginationType) => {
    const {push} = useRouter()
    const amountPages = Math.round(amountPublicRepos / 4)
    const trueButtonFirstPage =  page != 1 && page  > 0
    const trueButtonLastPage = page < amountPages
    return (
        <div className={styled.Wrapper}>
            <NavigationButton name={"Anterior"} disabled={!trueButtonFirstPage} direction={"left"} onclick={()=>push(`/user/pravtz/${page - 1}`)}/>

            <p>{page}/{Math.round(amountPublicRepos / 4)}</p>

            <NavigationButton name={"Próximo"} disabled={!trueButtonLastPage} direction={"right"} onclick={()=>push(`/user/pravtz/${page + 1}`)}/>
        </div>
    )
}