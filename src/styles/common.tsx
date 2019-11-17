import { css } from '../lib/styled-components';

export const primitiveColors = {
    aero: '#80B2ED',
    deutziaWhite: '#F9FCFF',
    draculaOrchid: '#2C3137',
    oldGloryBlue: '#03256C',
    vapor: '#EAEAEA',
    white: '#FFFFFF'
};

export const colors = {
    textTitleLight: primitiveColors.oldGloryBlue,
    textTitleDark: primitiveColors.aero,

    textBodyLight: primitiveColors.draculaOrchid,
    textBodyDark: primitiveColors.vapor,

    linkInactiveLight: primitiveColors.aero,
    linkActiveLight: primitiveColors.oldGloryBlue,
    linkInactiveDark: primitiveColors.aero,
    linkActiveDark: primitiveColors.vapor,

    backgroundLight: primitiveColors.deutziaWhite,
    backgroundDark: '#051221',
    backgroundSecondaryLight: primitiveColors.white,
    backgroundSecondaryDark: '#09203A',

    inlineCodeLight: 'rgba(255, 229, 100, 0.2)',
    inlineCodeDark: '#142b44',

    quoteHighlightLight: primitiveColors.oldGloryBlue,
    quoteHighlightDark: primitiveColors.oldGloryBlue,
    quoteBackgroundLight: '#cae2ff',
    quoteBackgroundDark: primitiveColors.aero,

    buttonInactiveTextLight: primitiveColors.vapor,
    buttonInactiveTextDark: '#051221',
    buttonInactiveBorderLight: primitiveColors.oldGloryBlue,
    buttonInactiveBorderDark: primitiveColors.aero,
    buttonInactiveBackgroundLight: primitiveColors.oldGloryBlue,
    buttonInactiveBackgroundDark: primitiveColors.aero,

    buttonActiveTextLight: primitiveColors.oldGloryBlue,
    buttonActiveTextDark: primitiveColors.vapor,
    buttonActiveBorderLight: primitiveColors.oldGloryBlue,
    buttonActiveBorderDark: primitiveColors.aero,
    buttonActiveBackgroundLight: 'rgba(0, 0, 0, 0)',
    buttonActiveBackgroundDark: 'rgba(0, 0, 0, 0)',

    borderLight: `rgba(46, 116, 201, 0.2)`,
    borderDark: `rgba(128, 178, 237, 0.2)`,

    inputBorderLight: `rgba(46, 116, 201, 0.2)`,
    inputBorderDark: `rgba(128, 178, 237, 0.2)`
};

type Sizes = { [index: string]: number };

const sizes: Sizes = {
    small: 576,
    medium: 992,
    large: 1200
};

export const pageWidth = {
    small: css`
        width: 800px;
    `,
    large: css`
        width: 1200px;
    `
};

export const transitionDuration = {
    slow: '0.2s',
    normal: '0.125s',
    fast: '0.0.1s'
};

type Media = { [index: string]: any };

// Iterate through the sizes and create a media query template
export const media: any = Object.keys(sizes).reduce((acc: Media, label) => {
    acc[label] = (...args: any) =>
        css`
            @media (max-width: ${sizes[label]}px) {
                // @ts-ignore
                ${css(...args)};
            }
        `;

    return acc;
}, {});

export const textSize = {
    small: css`
        font-size: 1.4rem;
    `,
    normal: css`
        font-size: 1.8rem;
        line-height: 1.8;
        font-weight: 300;

        ${media.small`
            font-size: 1.6rem;
        `};
    `,
    largeThin: css`
        font-size: 3.6rem;
        line-height: 1.5;
        font-weight: 100;

        ${media.small`
        font-size: 2rem;
    `};
    `,
    large: css`
        line-height: 1.5;
        font-size: 3.6rem;
        font-weight: 600;

        ${media.small`
            font-size: 2rem;
        `};
    `,
    xlarge: css`
        font-size: 6rem;
        font-weight: 600;
        line-height: 1.4;

        ${media.small`
          font-size: 2.8rem;
        `};
    `
};

export const textColor = {
    body: css`
        color: ${props =>
            props.theme && props.theme.color === 'light'
                ? colors.textBodyLight
                : colors.textBodyDark};
    `,
    title: css`
        color: ${props =>
            props.theme && props.theme.color === 'light'
                ? colors.textTitleLight
                : colors.textTitleDark};
    `
};
