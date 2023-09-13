import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {InputSearch} from "@/components/InputSearch/index";


const mockHandlerSearchUser = jest.fn((data)=> data)
describe('InputSearch', () => {
    it('renders Input main', () => {
        render(<InputSearch handlerSearchUsers={mockHandlerSearchUser}/>)
        //screen.logTestingPlaygroundURL()

        fireEvent.input(screen.getByRole('textbox'),{
            target:{
                value: "anything"
            }
        })
        fireEvent.submit(screen.getByRole('button', {
            name: /buscar/i
        }))



    })
})