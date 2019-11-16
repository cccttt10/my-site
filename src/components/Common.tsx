import styled, { css } from 'styled-components';

import {
    colors,
    media,
    pageWidth,
    textSize,
    transitionDuration
} from '../styles/common';
import Link from './Link';

export const ConstrainedPageWidth = css`
    ${pageWidth.large}
    max-width: 100%;
    margin: auto;
`;

export const PageWrapper = styled.div`
    ${ConstrainedPageWidth};
`;

export const PaddedPageWrapper = styled(PageWrapper)`
    padding: 80px 20px;

    ${media.small`
      padding: 40px 20px;
    `};
`;

export const SectionWrapper = styled(PageWrapper)`
    padding: 80px 0;

    ${media.small`
        padding: 40px 0;
    `};
`;

export const Divider = styled.hr`
    border: 1px solid ${colors.borderLight};
    border-color: ${props =>
        props.theme.color === 'light' ? colors.borderLight : colors.borderDark};
    margin: 40px;
`;

export const ButtonStyles = css`
    ${textSize.normal};
    text-align: center;
    white-space: nowrap;
    height: 40px;
    line-height: 37px;
    padding: 0 20px;
    background-color: ${props =>
        props.theme.color === 'light'
            ? colors.buttonInactiveBackgroundLight
            : colors.buttonInactiveBackgroundDark};
    color: ${props =>
        props.theme.color === 'light'
            ? colors.buttonInactiveTextLight
            : colors.buttonInactiveTextDark};
    border: 2px solid ${colors.buttonInactiveBorderLight};
    border-radius: 0;
    -webkit-appearance: none;
    border-color: ${props =>
        props.theme.color === 'light'
            ? colors.buttonInactiveBorderLight
            : colors.buttonInactiveBorderDark};
    display: inline-block;
    text-decoration: none;
    transition: all ${transitionDuration.normal} ease-in-out;

    &:hover {
        cursor: pointer;
        text-decoration: none;
        background-color: ${props =>
            props.theme.color === 'light'
                ? colors.buttonActiveBackgroundLight
                : colors.buttonActiveBackgroundDark};
        color: ${props =>
            props.theme.color === 'light'
                ? colors.buttonActiveTextLight
                : colors.buttonActiveTextDark};
        border: 2px solid ${colors.buttonActiveBorderLight};
        border-color: ${props =>
            props.theme.color === 'light'
                ? colors.buttonActiveBorderLight
                : colors.buttonActiveBorderDark};
    }
`;

export const Button = styled(Link)`
    ${ButtonStyles};
`;

export const LightButton = styled(Button)`
    background-color: ${colors.buttonInactiveBackgroundDark};
    color: ${colors.buttonInactiveTextDark};
    border-color: ${colors.buttonInactiveBorderDark};

    &:hover {
        background-color: ${colors.buttonActiveBackgroundDark};
        color: ${colors.buttonActiveTextDark};
        border-color: ${colors.buttonActiveBorderDark};
    }
`;

export const DarkButton = styled(Button)`
    background-color: ${colors.buttonInactiveBackgroundLight};
    color: ${colors.buttonInactiveTextLight};
    border-color: ${colors.buttonInactiveBorderLight};

    &:hover {
        background-color: ${colors.buttonActiveBackgroundLight};
        color: ${colors.buttonActiveTextLight};
        border-color: ${colors.buttonActiveBorderLight};
    }
`;
