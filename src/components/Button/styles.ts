import styled from 'styled-components'

export const Button = styled.button`
  height: 2.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  font-weight: 500;
  font-size: 0.875rem;

  transition: filter 0.1s;

  &:hover {
    filter: brightness(0.95);
  }
`
