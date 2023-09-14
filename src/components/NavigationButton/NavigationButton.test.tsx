import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import {NavigationButton} from "./index";


describe('Navigation Button', () => {
    const handleClick = jest.fn()
    it('renders button component main', () => {
        render(<NavigationButton onclick={handleClick} name="any" direction={"left"}  />)
        const buttonPrimary = screen.getByRole('button', {name: /any/i})
        expect(buttonPrimary).toHaveTextContent("any")

    })

    it("should calls onClick prop when clicked", () => {
        render(<NavigationButton  onclick={handleClick}  name="any" direction={"right"}/>)
        //screen.logTestingPlaygroundURL()

        const button = screen.getByRole('button', { name: /any/i })

        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})