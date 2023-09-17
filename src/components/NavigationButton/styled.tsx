import styled from "styled-components";

type Wrappertype = {
    isDisabled: boolean
}
export const Wrapper = styled.div<Wrappertype>`
  display: flex;
  background-color: transparent;
  align-items: center;
  cursor: ${(props) => props.isDisabled ? "not-allowed" : "pointer"};;
  opacity: ${(props) => props.isDisabled ? "0.1" : "0.7"};
  &:hover{
    opacity: ${(props) => props.isDisabled ? "0.1" : "1"};;
  }
  &:disabled{
    opacity: 0.4;
  }
`
export const ButtonNavigation = styled.button`
  color: var(--colortext);
  background-color: transparent;
  border: none
  
  
  
`