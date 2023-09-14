import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {BoxProfileUser} from "./index";

const renderComponent = () => {
    render(<BoxProfileUser
        name={"John"}
        login={"john"}
        id={88888888}
        location={"Brasil"}
        avatarUrl={{
            src:"/logo2.svg",
            alt:"logo"
        }}
    />)
}

describe('BoxProfileUser', ()=> {

    it('Should render component BoxProfileUser',()=> {
        renderComponent()

        expect(screen.getByRole('heading', {name: /john/i})).toBeInTheDocument()
        expect(screen.getByText(/john •/i)).toBeInTheDocument()
        expect(screen.getByText(/brasil/i)).toBeInTheDocument()
    })

    it('should render an image',()=> {
        renderComponent()
        const imagAlt = screen.getByAltText('logo');
        expect(imagAlt).toBeInTheDocument()
    })


})