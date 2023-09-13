import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import {NavigationLink} from "./index";

describe('InputSearch', () => {
    const handleClick = jest.fn()
    it('renders link ', () => {
        render(<NavigationLink href="/" name="anything"/>)
        const link = screen.getByRole('link', {name: /anything/i})
        expect(link).toHaveTextContent("anything")
        // screen.logTestingPlaygroundURL()
    })


})