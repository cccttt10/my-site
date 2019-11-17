import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/common';
import { PageWrapper } from './Common';
import Link from './Link';

export const footerHeight = 120;

const Footer = styled.footer`
    background-color: ${props =>
        props.theme.color === 'light'
            ? colors.backgroundSecondaryLight
            : colors.backgroundSecondaryDark};
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

const SocialMediaLink = styled(Link)``;

type FooterProps = {};

// eslint-disable-next-line no-empty-pattern
const FooterComponent = ({}: FooterProps) => {
    return (
        <Footer>
            <ModifiedPageWrapper>
                <SocialMediaList>
                    <SocialMediaListItem>
                        <SocialMediaLink to="https://github.com/robertcoopercode">
                            Github
                        </SocialMediaLink>
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <SocialMediaLink to="https://twitter.com/RobertCooper_RC">
                            Twitter
                        </SocialMediaLink>
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <SocialMediaLink to="mailto:robert@robertcooper.me">
                            Email
                        </SocialMediaLink>
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <SocialMediaLink to="https://www.robertcooper.me/rss.xml">
                            RSS
                        </SocialMediaLink>
                    </SocialMediaListItem>
                </SocialMediaList>
            </ModifiedPageWrapper>
        </Footer>
    );
};

export default FooterComponent;
