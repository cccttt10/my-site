import React from 'react';
import styled from 'styled-components';

import { Button } from '../Common';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

type GithubButtonProps = {
    text: string;
    link: string;
};

const GithubButton = ({ text, link }: GithubButtonProps) => {
    return (
        <Wrapper>
            <Button to={link}>{text}</Button>
        </Wrapper>
    );
};

export default GithubButton;
