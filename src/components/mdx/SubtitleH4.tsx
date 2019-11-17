import styled from 'styled-components';

import { textColor } from '../../styles/common';

export default styled.h4`
    ${textColor.title};
    display: block;
    text-align: left;
    font-size: 1.8rem;
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: 'Poppins';
    font-weight: 400;

    * {
        font-size: 1.8rem !important;
    }
`;
