import styled from "styled-components";


export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 110px;
  gap: 8px;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: var(--bgBox);
  border: 1px solid var(--colorBorder)
`
export const ImageUser = styled.figure``
export const LoginAndId = styled.p`
  font-size: 12px;
  color: var(--colorText);
  
  span{
  font-weight: 300;
}
`
export const Location = styled.p`
  font-size: 12px;
  color: var(--colorTextNotHighlighted)
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 86px;
  padding-top: 4px;
  padding-bottom: 8px;
  
`
export const Name = styled.h1`
  font-size: 16px;
  color: var(--colorTextProminently);
`
export const Group = styled.div`
  
`
