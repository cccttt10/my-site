import React from 'react';
import styled from 'styled-components';

type SandboxProps = {
    src: string;
    title: string;
};

const StyledIframe = styled.iframe`
    width: 100%;
    margin: 40px 0;
    height: 500px;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
`;

const Sandbox = ({ src, title }: SandboxProps) => {
    return (
        <StyledIframe
            src={src}
            title={title}
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
    );
};

export default Sandbox;
