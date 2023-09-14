import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import {NavigationButton} from "./index";


describe('Navigation Button', () => {
    const handleClick = jest.fn()
    it('renders button component main', () => {
        render(<NavigationButton name="any" direction={"left"}  />)
        const buttonPrimary = screen.getByRole('button', {name: /any/i})
        expect(buttonPrimary).toHaveTextContent("any")
        // screen.logTestingPlaygroundURL()
    })

    it("should calls onClick prop when clicked", () => {
        render(<NavigationButton   name="any" direction={"right"}/>)

        fireEvent.click(screen.getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})