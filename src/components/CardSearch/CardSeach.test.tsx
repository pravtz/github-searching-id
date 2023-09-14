import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {CardSearch} from "./index";




describe('CardSearch', ()=> {

    it('Should render component CardSearch',() => {
        render(<CardSearch name={'anyhing'} login={"anything"} location={"Brasil"} image={{src:"./any.jpg", alt:"any"}}/>)


    })

})

