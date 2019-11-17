import styled from 'styled-components';

import { textColor } from '../../styles/common';

export default styled.h3`
    ${textColor.title};
    display: block;
    text-align: left;
    font-size: 2.8rem;
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: 'Poppins';
    font-weight: 700;

    * {
        font-size: 2rem !important;
    }
`;
