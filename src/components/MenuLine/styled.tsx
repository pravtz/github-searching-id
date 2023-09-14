import styled from "styled-components";

type WrapperProps = {
    isEmpty?: boolean
}
export const Wrapper = styled.section<WrapperProps>`
  display: ${(props)=> props.isEmpty ? 'none' : 'block'};
  width: 100%;
  text-align: right;
  
`
export const ButtonTitle = styled.button`
  background: transparent;
  border: none;
  color: var(--colorText);
  font-family: var(--font-inter);
  
`
export const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  
`
export const TitleMenu = styled.h3`
  text-align: right;
  font-size: 12px;
  width: 100%;
`

type IconChevronType = {
    isTurned: boolean
}
export const IconChevron = styled.div<IconChevronType>`
  transform: ${(props) => props.isTurned ? 'rotate(90deg)' : 'rotate(0)'};
  transition: all 0.1s ease;
`

type ContentType = {
    isOpen?: boolean
}
export const Content = styled.div<ContentType>`
  border-top: 1px solid var(--colorBorder);
  text-align: left;
  padding-top: 16px;
  //border-bottom: 1px solid red;
  height: ${(props) => props.isOpen ? "238px" : "1px"};
  overflow: hidden;
  transition: height 0.1s ease;
  
`