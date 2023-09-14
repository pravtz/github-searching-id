import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid var(--colorBorder);
  border-radius: var(--border-radius);
  padding: 5px;
  background-color: var(--bgBox);
  &:hover{
    background-color: var(--bgBoxHighlighted);
    border-color: var(--colorBorderHighlighted);
  }
  
`
export const Avatar = styled.div`
  border-radius: 8px;
  overflow: hidden;
  
`
export const Content = styled.div`
  padding-left: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const NameText = styled.h2`
  color: var(--colorTextProminently);
  font-size: 16px;
  
`
export const LoginText = styled.p`
  color: var(--colorText);
  font-size: 12px;
  font-weight: lighter;
  
`
export const GroupIconAndText = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;
`
export const LocationText = styled.p`
  font-size: 12px;
  color: var(--colorTextNotHighlighted);
`
