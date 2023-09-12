import styled from "styled-components";

export const Wrapper = styled.div`
    margin: auto;
    height: 100vh;
    color: var(--colorText);
  
    @media (max-width: calc(639px - 1px)) {
      max-width: 639px ;
    }
    @media(min-width: 640px){
      max-width: 640px;
    }    
    @media(min-width: 768px){
      max-width: 768px;
    }
    @media(min-width: 1024px){
      max-width: 1024px;
    }
    @media(min-width: 1280px){
      max-width: 1280px;
    }  
    @media(min-width: 1536px){
      max-width: 1536px;
    }

`