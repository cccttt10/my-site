import styled from 'styled-components';

import { colors } from '../../styles/common';

export default styled.div`
    color: ${colors.textBodyLight};
    background-color: ${props =>
        props.theme.color === 'light'
            ? colors.quoteBackgroundLight
            : colors.quoteBackgroundDark};
    margin-left: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 10px;
    position: relative;
    font-size: 1.6rem;
    line-height: 1.7;

    a {
        color: ${colors.linkActiveLight};

        &:hover {
            color: ${colors.linkActiveLight};
        }
    }

    p {
        margin: 0;
        color: ${colors.textBodyLight};
    }

    code {
        background: ${colors.inlineCodeLight} !important;
    }

    ::before {
        position: absolute;
        width: 10px;
        left: -10px;
        top: 0;
        background-color: ${props =>
            props.theme.color === 'light'
                ? colors.quoteHighlightLight
                : colors.quoteHighlightDark};
        height: 100%;
        content: '';
    }
`;
