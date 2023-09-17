import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {Pagination} from "./index";
import {useRouter} from "next/navigation";

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))
describe("Pagination", ()=>{
    it("should render component Pagination", ()=>{
        // @ts-ignore
        useRouter.mockImplementation(() => ({
            route: '/any'
        }))
        render(<Pagination amountPublicRepos={39} page={4}/>)
    })
})