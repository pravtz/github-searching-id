import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import {ScreenStart} from "./index";
import {useRouter} from "next/navigation";

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))


describe('ScreenStart', () => {
    it('renders screen start', () => {
        // @ts-ignore
        useRouter.mockReturnValue({
            query: {},
            push: () => {}
        })
        render(<ScreenStart />)

        // screen.logTestingPlaygroundURL()

    })
})