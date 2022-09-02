/* eslint-disable no-unused-vars */
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import {
    Button,
    Divider,
    PaddedPageWrapper,
    PageWrapper
} from '../../components/Common';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import styled from '../../lib/styled-components';
import { colors, media, pageWidth, textColor, textSize } from '../../styles/common';
// eslint-disable-next-line no-unused-vars
import { Project as ProjectType } from '../../types/Project';

const Header = styled.div<any>`
    padding: 120px 20px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledPageWrapper = styled(PageWrapper)`
    display: flex;

    ${media.medium`
        flex-direction: column-reverse;
        align-items: center;
    `};
`;

const Title = styled.h1<any>`
    ${textSize.xlarge};
    margin-bottom: 5px;
    color: ${({ textColor }) =>
        textColor === 'light' ? colors.textBodyDark : colors.textBodyLight};
`;

const Subtitle = styled.span<any>`
    font-weight: 300;
    color: ${({ textColor }) =>
        textColor === 'light' ? colors.textBodyDark : colors.textBodyLight};
`;

const Description = styled.p<any>`
    ${textSize.large};
    color: ${({ textColor }) =>
        textColor === 'light' ? colors.textBodyDark : colors.textBodyLight};
`;

const LeftSection = styled.div`
    padding-top: 40px;
    padding-right: 40px;
    max-width: 640px;
    margin-right: auto;

    ${media.medium`
        margin-right: 0;
        padding-right: 0;
        text-align: center;
    `};
`;

const Image = styled(Img)`
    width: 800px;
    max-width: 100%;

    ${media.medium`
        width: 80%;
    `};
`;

const SectionBody = styled(PaddedPageWrapper)`
    ${pageWidth.small};
    margin: auto;
`;

const SectionTitle = styled.h2`
    ${textColor.title};
    ${textSize.xlarge};
    text-align: center;
    margin-bottom: 40px;
`;

const SectionHeading = styled.h3`
    ${textSize.large};
    ${textColor.title};
    margin-top: 60px;
`;

const SectionParagraph = styled.p``;

const SectionImage = styled(Img)`
    margin: 40px auto;
    max-width: 100%;
`;

const SectionDivider = styled(Divider)`
    margin: 80px 0;
`;

const ViewButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

const ViewButton = styled(Button)`
    margin: auto;
`;

const TwoImages = styled.div`
    display: flex;
`;

type ProjectsProps = {
    data: {
        mdx: ProjectType['node'];
        mainTransparent: any;
    };
};

export const Project = ({
    data: {
        mdx: { frontmatter: project },
        mainTransparent
    }
}: ProjectsProps) => {
    return (
        <Layout title="CT Gao | iColor" frontmatter={project}>
            <Header backgroundColor={project.backgroundColor}>
                <StyledPageWrapper>
                    <LeftSection>
                        <Title textColor={project.textColor}>{project.title}</Title>
                        <Subtitle textColor={project.textColor}>
                            {project.subtitle}
                        </Subtitle>
                        <Description textColor={project.textColor}>
                            {project.description}
                        </Description>
                    </LeftSection>
                    <Image fluid={project.image.childImageSharp.fluid} />
                </StyledPageWrapper>
            </Header>
            <SectionBody>
                <ViewButtonWrapper>
                    <ViewButton to="https://cccttt10.github.io/icolor/">
                        View the app
                    </ViewButton>
                </ViewButtonWrapper>
            </SectionBody>
        </Layout>
    );
};

export default Project;

export const pageQuery = graphql`
    query {
        mdx(frontmatter: { title: { eq: "iColor" } }) {
            frontmatter {
                title
                subtitle
                description
                backgroundColor
                textColor
                image {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                banner {
                    publicURL
                }
            }
        }
    }
`;
