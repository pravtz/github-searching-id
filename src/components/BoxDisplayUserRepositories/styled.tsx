import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--border-radius);
  background-color: var(--bgBox);
  border: 1px solid var(--colorBorder);
  padding: 8px;
  min-height: 107px;
  &:hover{
    background-color: var(--bgBoxHighlighted);
    border-color: var(--colorBorderHighlighted);
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: var(--primary)
`
export const Description = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: var(--colorText);
`
export const Language = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: var(--colorText);
  
  span{
    font-size: 12px;
    font-weight: 800;
  }
`

export const GroupDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Date = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: var(--colorText);

  span{
    font-size: 12px;
    font-weight: 800;
  }
`
