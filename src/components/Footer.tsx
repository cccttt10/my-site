import React from 'react';
import styled from 'styled-components';

import { colors, textColor } from '../styles/common';
import { PageWrapper } from './Common';
import Link from './Link';

export const footerHeight = 120;

// background-color: ${props =>
//     props.theme.color === 'light'
//         ? colors.backgroundSecondaryLight
//         : colors.backgroundSecondaryDark};
const Footer = styled.footer`
    border-top: 2px solid ${colors.borderLight};
    border-color: ${props =>
        props.theme.color === 'light' ? colors.borderLight : colors.borderDark};
    height: ${footerHeight}px;
`;

const ModifiedPageWrapper = styled(PageWrapper)`
    justify-content: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SocialMediaList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const SocialMediaListItem = styled.li`
    padding: 0 7px;
    margin: 0;

    &::before {
        content: '';
    }
`;

const SocialMediaLink = styled(Link)`
    ${textColor.title}
    text-decoration: none;
    border-bottom-width: 0;
`;

type FooterProps = {};

// eslint-disable-next-line no-empty-pattern
const FooterComponent = ({}: FooterProps) => {
    return (
        <Footer>
            <ModifiedPageWrapper>
                <SocialMediaList>
                    <SocialMediaListItem>
                        <SocialMediaLink to="https://github.com/chuntonggao">
                            Github
                        </SocialMediaLink>
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <SocialMediaLink to="https://www.linkedin.com/in/chuntonggao">
                            LinkedIn
                        </SocialMediaLink>
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <SocialMediaLink to="mailto:heihegao@gmail.com">
                            Email
                        </SocialMediaLink>
                    </SocialMediaListItem>
                </SocialMediaList>
            </ModifiedPageWrapper>
        </Footer>
    );
};

export default FooterComponent;
