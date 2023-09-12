import styled from 'styled-components'

export const Wrapper = styled.main`

  display: flex;
  gap: 8px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  @media(min-width: 640px){
    flex-direction: row-reverse;
  }
`
export const SectionCopy = styled.section`

  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: center;
  justify-content: center;
  max-width: 40%;
  gap: 37px;
`

export const DividingLine = styled.div`
  width: 40%;
  height: 1px;
  background-color: var(--colorBorder);
  @media(min-width: 640px ){
    width: 1px;
    height: 40%;
  }
`
export const SectionSplash = styled.h1`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 40%;
`
export const TextCopy = styled.p`
  
`
export const WrapperButtonEnter = styled.div`
  width: 100%;
`
