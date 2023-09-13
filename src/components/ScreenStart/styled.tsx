import styled from 'styled-components'

export const Wrapper = styled.main`

  display: flex;
  justify-content: center;
  gap: 30px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  @media(min-width: 768px){
    flex-direction: row-reverse;
    
  }
`
export const SectionCopy = styled.section`

  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: center;
  justify-content: center;
  max-width: 348px;
  gap: 8px;
  
  @media(min-width: 768px){
    gap: 37px;
  }
  
  figure{
    @media(min-width: 768px){
      display: none;
      
    }
  }
`

export const DividingLine = styled.div`
  display: none;
  background-color: var(--colorBorder);
  @media(min-width: 768px ){
    display: block;
    width: 1px;
    height: 30%;
  }
`
export const SectionSplash = styled.h1`
  
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  
  @media(min-width: 768px){
    display: flex;
  }
  
`
export const TextCopy = styled.p`
  line-height: 27px;
  font-size: 16px;
  text-align: center;
  
  @media(min-width: 768px){
    text-align: right;
    font-size: 20px;
  }
  
  strong{
    color: var(--primary)
  }
`
export const WrapperButtonEnter = styled.div`
  width: 100%;
`
