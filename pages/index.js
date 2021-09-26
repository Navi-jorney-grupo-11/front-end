import styled from 'styled-components';

import Header from '../components/Header';

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Hero>
        <h1>HH um jeito tecnológico de fazer um <span>Happy Hour</span></h1>
      </Hero>
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

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80%;

  h1 {
    font-weight: 300;
    font-size: 2.5rem;
    width: 47rem;
  }

  span {
    font-weight: 500;
  }
`;
