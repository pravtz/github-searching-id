import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
;
  
`

export const GroupSearchText = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  
  gap: 7px;
  
`
export const InputSearchText = styled.input`
  height: 38px;
  width: 100%;
  padding: 12px 8px;
  border: 1px solid var(--primary);
  border-radius: var(--border-radius);
`
export const ButtonForm = styled.button`
  max-width: 79px;
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