import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
 
  gap: 8px;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: var(--bgBox);
  border: 1px solid var(--colorBorder);
  padding: 8px;
`
export const Title = styled.p`
  font-size: 10px;
  text-align: center;
`
export const Value = styled.p`
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  
`
