import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import {Button} from "./index";


describe('InputSearch', () => {
    it('renders button component main', () => {
        render(<Button label={"anything"} />)
        const buttonPrimary = screen.getByRole('button', {name: /anything/i})
        expect(buttonPrimary).toHaveTextContent("anything")
        // screen.logTestingPlaygroundURL()

    })
})