import styled from "styled-components";

export const ButtonMain = styled.button`
    width: 100%;
    border: none;
    border-radius: var(--border-radius);
    color: var(--colorText);
    background-color: var(--primary);
    padding: 10px 8px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    font-family: var(--font-inter);
  
    &:hover{
      opacity: 0.8;
    }
`