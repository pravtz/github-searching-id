import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {CardSearch} from "./index";


// jest.mock('next/image', () => ({
//     __esModule: true,
//     default: (props: any) => {
//         return <img {...props} />
//     },
// }))


describe('CardSearch', ()=> {

    it('Should render component CardSearch',() => {
        render(<CardSearch key={1} name={'anyhing'} login={"anything"} location={"Brasil"} image={{src:"/logo2.svg", alt:"any"}}/>)


    })

})

