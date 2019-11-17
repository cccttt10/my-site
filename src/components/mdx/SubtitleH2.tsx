import styled from 'styled-components';

import { textColor } from '../../styles/common';

export default styled.h2`
    ${textColor.title};
    display: block;
    text-align: center;
    font-size: 5rem;
    margin-top: 8rem;
    margin-bottom: 6rem;
    font-weight: 800;

    * {
        font-size: 2.8rem !important;
    }
`;
