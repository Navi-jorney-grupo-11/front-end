import styled, { css } from 'styled-components';
import { below } from '../../styles/media';

import Center from '../Center';

export default function Footer() {
    return (
        <Center>
            <Container>
                <div className="nameContainer">
                    <img src="./smileys.png" alt="logo" />
                    <h1>HH</h1>
                </div>
                <p>Navi Tech Jorney - Grupo 11</p>
            </Container>
        </Center>
    )
}

const Container = styled.div`
    border-top: 1px solid rgba(0,0,0,.5);
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nameContainer {
        display: flex;
        align-items: center;

        h1 {
            font-weight: 400;
            margin-right: 1rem;
        }

        img {
            height: 3rem;
            width: 3rem;
            margin-right: 0.5rem;
        }
    }
    ${below(
        'md',
        css`
            padding: 3rem 1rem;
        `
    )}
`;
