import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import {Button} from "./index";


describe('InputSearch', () => {
    const handleClick = jest.fn()
    it('renders button component main', () => {
        render(<Button label={"anything"} onclick={handleClick} />)
        const buttonPrimary = screen.getByRole('button', {name: /anything/i})
        expect(buttonPrimary).toHaveTextContent("anything")
        // screen.logTestingPlaygroundURL()
    })

    it("should calls onClick prop when clicked", () => {
        render(<Button label={"anything"} onclick={handleClick} />)

        fireEvent.click(screen.getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})