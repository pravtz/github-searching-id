import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {BoxDisplayUserRepositories} from "./index";

const renderComponent = () => {
    render(<BoxDisplayUserRepositories
        title={"John"}
        description={"This is description fake"}
        language={"Go"}
        createAt={"2021-06-28T12:31:09Z"}
        pushedAt={"2021-06-30T02:35:33Z"}
        htmlUrl={"https://github.com/pravtz"}
    />)
}
describe("BoxDisplayUserRepositories",() => {
    it('Should render component', ()=>{
        renderComponent()
    })
})