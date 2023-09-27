import {NavigationButton} from "@/components/NavigationButton";
import styled from './styled.module.sass'

type PaginateSearchType = {
    totalItems: any
    currentPage: number
    perPage: number
    onclickNextPage: () => void
    onclickPreviousPage: () => void
}
export const PaginateSearch = ({totalItems, currentPage,perPage, onclickNextPage, onclickPreviousPage}: PaginateSearchType) => {
    const totalPage = totalItems / perPage


    return (
        <div className={styled.Wrapper}>
            <NavigationButton name={"Anterior"} direction={"left"} onclick={onclickPreviousPage}/>
            <p>{currentPage}/{Math.round(totalPage)}</p>
            <NavigationButton name={"Próxima"} direction={"right"} onclick={onclickNextPage}/>
        </div>
    )
}