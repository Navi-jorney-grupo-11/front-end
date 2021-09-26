import styled, { css } from 'styled-components';
import { below } from '../../../styles/media';

import Center from '../../Center';

export default function What() {
    return (
        <Wrapper>
            <Center>
                <Container>
                    <div className="textContainer">
                        <h1>O que é o HH</h1>
                        <p>O HH é um site de video chamadas onde você consegue criar um evento
                            com várias salas e conseguir transitar entre elas com muita facilidade,
                            deixando assim o seu Happy Hour bem mais interessante.
                        </p>
                    </div>
                    <div className="imgContainer">
                        <img src="./system.svg" alt="hh site" />
                    </div>
                </Container>
            </Center>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: rgba(0,0,0,.5);
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 2rem 0;
    .textContainer {
        width: 30%;
        h1 {
            font-weight: 400;
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1.5rem;
            font-weight: 300;
        }
    }
    .imgContainer {
        display: flex;
        justify-content: center;
        width: 70%;
        img {
            width: 100%;
        }
    }
    ${below(
        'md',
        css`
           flex-direction: column;
            padding: 2rem 1rem;
            .imgContainer {
                width: 100%;
                margin-top: 2rem;
            }
            .textContainer {
                width: 100%;
            }
        `
    )}
`;