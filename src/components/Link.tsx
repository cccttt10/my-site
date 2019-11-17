import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/common';

const Link = styled.a<{ active: string; to?: string }>`
    color: ${props => {
        if (props.active === 'true') {
            if (props.theme.color === 'light') {
                return colors.linkActiveLight;
            } else {
                return colors.linkActiveDark;
            }
        } else {
            if (props.theme.color === 'light') {
                return colors.linkInactiveLight;
            } else {
                return colors.linkInactiveDark;
            }
        }
    }};

    text-decoration: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    &:hover {
        color: ${props =>
            props.theme.color === 'light'
                ? colors.linkActiveLight
                : colors.linkActiveDark};
    }
`;

type LinkComponentProps = {
    children: React.ReactNode;
    to: string;
    active?: string;
};

const LinkComponent = ({
    children,
    to,
    active = 'false',
    ...other
}: LinkComponentProps) => {
    const internal = /^\/(?!\/)(?!static\/)/.test(to);

    if (internal) {
        return (
            <Link as={GatsbyLink} to={to} active={active} {...other}>
                {children}
            </Link>
        );
    }

    return (
        <Link href={to} active={active} target="_blank" rel="noopener" {...other}>
            {children}
        </Link>
    );
};

export default LinkComponent;
