import styled from '../lib/styled-components';
import { media, textColor, textSize } from '../styles/common';

export const Title = styled.h1`
    ${textColor.title};
    ${textSize.xlarge};
    text-align: center;
    margin: 0 0 40px 0;
    font-family: 'Poppins', sans-serif;

    ${media.small`
        margin: 0 0 20px 0;
    `};
`;
