import styled from 'styled-components';

export default function Header() {
    return (
        <Container>
            <img src="./smileys.png" alt="logo" />
            <h1>HH</h1>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 4rem;

    img {
        height: 3rem;
        width: 3rem;
        margin-right: 0.5rem;
    }

    h1 {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 400;
    }
`;
