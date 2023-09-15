import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {BoxDisplayUserData} from "./index";

describe("BoxDisplayUserData", ()=>{
    it("should render component BoxDisplayUserData", ()=>{
        render(<BoxDisplayUserData title={"anything"} value={86}/>)
    })
})