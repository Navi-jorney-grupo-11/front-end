import styled, { css } from 'styled-components';
import { below } from '../../../styles/media';

import Center from '../../Center';

export default function Tech() {
    return (
        <Center>
            <Container>
                <div className="textContainer">
                    <h1>Tecnologias Utilizadas</h1>
                    <p>
                        Essas são algumas das tecnologias que foi utilizadas.
                    </p>
                </div>
                <div className="imgContainer">
                    <div className="techIcon">
                        <img src="./next.png" alt="" />
                    </div>
                    <div className="techIcon">
                        <img src="./js.png" alt="" />
                    </div>
                    <div className="techIcon">
                        <img src="./nodejs.png" alt="" />
                    </div>
                    <div className="techIcon">
                        <img src="./react.png" alt="" />
                    </div>
                    <div className="techIcon">
                        <img src="./styled.png" alt="" />
                    </div>
                    <div className="techIcon">
                        <img src="./css.png" alt="" />
                    </div>
                    <div className="techIcon">
                        <img src="./html.png" alt="" />
                    </div>
                </div>
            </Container>
        </Center>
    )
}


const Container = styled.div`
    width: 100%;
    padding: 8rem 0;
    .textContainer {
        margin-bottom: 2rem;
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
        display: grid;
        grid-template-columns: repeat(auto-fit, 9rem);
        .techIcon {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            margin: 0.5rem;
            width: 8rem;
            height: 8rem;
            background-color: ${({ theme }) => theme.colors.white};
            img {
                width: 80%;
            }
        }
    }
    ${below(
        'md',
        css`
            padding: 4rem 1rem;
        `
    )}
`;