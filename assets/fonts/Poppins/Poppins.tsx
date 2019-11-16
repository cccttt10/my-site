/* eslint-disable max-lines */
/* eslint-disable simple-import-sort/sort */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// prettier-ignore

import { css } from '../../../src/lib/styled-components';

// @ts-ignore
import PoppinsBlackWoff from './Poppins-Black.woff';
// @ts-ignore
import PoppinsBlackWoff2 from './Poppins-Black.woff2';

// @ts-ignore
import PoppinsBlackItalicWoff from './Poppins-BlackItalic.woff';
// @ts-ignore
import PoppinsBlackItalicWoff2 from './Poppins-BlackItalic.woff2';

// @ts-ignore
import PoppinsBoldWoff from './Poppins-Bold.woff';
// @ts-ignore
import PoppinsBoldWoff2 from './Poppins-Bold.woff2';

// @ts-ignore
import PoppinsBoldItalicWoff from './Poppins-BoldItalic.woff';
// @ts-ignore
import PoppinsBoldItalicWoff2 from './Poppins-BoldItalic.woff2';

// @ts-ignore
import PoppinsExtraBoldWoff from './Poppins-ExtraBold.woff';
// @ts-ignore
import PoppinsExtraBoldWoff2 from './Poppins-ExtraBold.woff2';

// @ts-ignore
import PoppinsExtraBoldItalicWoff from './Poppins-ExtraBoldItalic.woff';
// @ts-ignore
import PoppinsExtraBoldItalicWoff2 from './Poppins-ExtraBoldItalic.woff2';

// @ts-ignore
import PoppinsExtraLightWoff from './Poppins-ExtraLight.woff';
// @ts-ignore
import PoppinsExtraLightWoff2 from './Poppins-ExtraLight.woff2';

// @ts-ignore
import PoppinsExtraLightItalicWoff from './Poppins-ExtraLightItalic.woff';
// @ts-ignore
import PoppinsExtraLightItalicWoff2 from './Poppins-ExtraLightItalic.woff2';

// @ts-ignore
import PoppinsItalicWoff from './Poppins-Italic.woff';
// @ts-ignore
import PoppinsItalicWoff2 from './Poppins-Italic.woff2';

// @ts-ignore
import PoppinsLightWoff from './Poppins-Light.woff';
// @ts-ignore
import PoppinsLightWoff2 from './Poppins-Light.woff2';

// @ts-ignore
import PoppinsLightItalicWoff from './Poppins-LightItalic.woff';
// @ts-ignore
import PoppinsLightItalicWoff2 from './Poppins-LightItalic.woff2';

// @ts-ignore
import PoppinsMediumWoff from './Poppins-Medium.woff';
// @ts-ignore
import PoppinsMediumWoff2 from './Poppins-Medium.woff2';

// @ts-ignore
import PoppinsMediumItalicWoff from './Poppins-MediumItalic.woff';
// @ts-ignore
import PoppinsMediumItalicWoff2 from './Poppins-MediumItalic.woff2';

// @ts-ignore
import PoppinsRegularWoff from './Poppins-Regular.woff';
// @ts-ignore
import PoppinsRegularWoff2 from './Poppins-Regular.woff2';

// @ts-ignore
import PoppinsSemiBoldWoff from './Poppins-SemiBold.woff';
// @ts-ignore
import PoppinsSemiBoldWoff2 from './Poppins-SemiBold.woff2';

// @ts-ignore
import PoppinsSemiBoldItalicWoff from './Poppins-SemiBoldItalic.woff';
// @ts-ignore
import PoppinsSemiBoldItalicWoff2 from './Poppins-SemiBoldItalic.woff2';

// @ts-ignore
import PoppinsThinWoff from './Poppins-Thin.woff';
// @ts-ignore
import PoppinsThinWoff2 from './Poppins-Thin.woff2';

// @ts-ignore
import PoppinsThinItalicWoff from './Poppins-ThinItalic.woff';
// @ts-ignore
import PoppinsThinItalicWoff2 from './Poppins-ThinItalic.woff2';

const Poppins = css`
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 100;
        src: url(${PoppinsThinWoff2}) format('woff2'),
            url(${PoppinsThinWoff}) format('woff');
    }
    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 100;
        src: url(${PoppinsThinItalicWoff2}) format('woff2'),
            url(${PoppinsThinItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 200;
        src: url(${PoppinsExtraLightWoff2}) format('woff2'),
            url(${PoppinsExtraLightWoff}) format('woff');
    }
    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 200;
        src: url(${PoppinsExtraLightItalicWoff2}) format('woff2'),
            url(${PoppinsExtraLightItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        src: url(${PoppinsLightWoff2}) format('woff2'),
            url(${PoppinsLightWoff}) format('woff');
    }
    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 300;
        src: url(${PoppinsLightItalicWoff2}) format('woff2'),
            url(${PoppinsLightItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url(${PoppinsRegularWoff2}) format('woff2'),
            url(${PoppinsRegularWoff}) format('woff');
    }
    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 400;
        src: url(${PoppinsItalicWoff2}) format('woff2'),
            url(${PoppinsItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        src: url(${PoppinsMediumWoff2}) format('woff2'),
            url(${PoppinsMediumWoff}) format('woff');
    }
    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 500;
        src: url(${PoppinsMediumItalicWoff2}) format('woff2'),
            url(${PoppinsMediumItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        src: url(${PoppinsSemiBoldWoff2}) format('woff2'),
            url(${PoppinsSemiBoldWoff}) format('woff');
    }
    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 600;
        src: url(${PoppinsSemiBoldItalicWoff2}) format('woff2'),
            url(${PoppinsSemiBoldItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        src: url(${PoppinsBoldWoff2}) format('woff2'),
            url(${PoppinsBoldWoff}) format('woff');
    }
    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 700;
        src: url(${PoppinsBoldItalicWoff2}) format('woff2'),
            url(${PoppinsBoldItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        src: url(${PoppinsExtraBoldWoff2}) format('woff2'),
            url(${PoppinsExtraBoldWoff}) format('woff');
    }
    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 800;
        src: url(${PoppinsExtraBoldItalicWoff2}) format('woff2'),
            url(${PoppinsExtraBoldItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 900;
        src: url(${PoppinsBlackWoff2}) format('woff2'),
            url(${PoppinsBlackWoff}) format('woff');
    }
    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 900;
        src: url(${PoppinsBlackItalicWoff2}) format('woff2'),
            url(${PoppinsBlackItalicWoff}) format('woff');
    }
`;

export default Poppins;
