import styled, { css } from 'styled-components';

import Header from '../components/Header';

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <h1>HH</h1>
    </Wrapper>

  )
}


const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    height: 100vh;
    width: 100vw;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
`;
