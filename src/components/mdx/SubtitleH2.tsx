import styled from 'styled-components';

import { textColor } from '../../styles/common';

export default styled.h2`
    ${textColor.title};
    display: block;
    text-align: left;
    font-size: 2.8rem;
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: 400;

    * {
        font-size: 2.8rem !important;
    }
`;
