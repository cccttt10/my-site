import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Fade from 'react-reveal/Fade';

import { DarkButton, LightButton, PageWrapper } from '../components/Common';
import Layout from '../components/Layout';
import { Title } from '../components/Typography';
import styled from '../lib/styled-components';
import { colors, media, textSize } from '../styles/common';
// eslint-disable-next-line no-unused-vars
import { Project as ProjectType } from '../types/Project';
import { ThemeEnum } from '../utils/context';

type ProjectProps = {
    textColor: ThemeEnum;
};

const Project = styled.div<ProjectProps>`
    padding: 120px 20px;
    text-align: center;
    color: ${props =>
        props.textColor === 'light' ? colors.textBodyDark : colors.textBodyLight};

    ${media.small`
        padding: 80px 20px;
    `};
`;

const ProjectTitle = styled(Title)`
    color: inherit;
    margin-top: 40px;
    margin-bottom: 0;

    ${media.small`
        margin-top: 20px;
    `};
`;

const ProjectSubtitle = styled.span`
    ${textSize.small};
    display: inline-block;
    margin-bottom: 25px;
`;

const ProjectDescription = styled.p`
    ${textSize.normal};
    width: 600px;
    max-width: 100%;
    margin: auto;
`;

const ProjectImage = styled(Img)`
    width: 450px;
    margin: auto;
    max-width: 100%;

    ${media.small`
        width: 300px;
    `};
`;

const LightProjectButton = styled(LightButton)`
    margin-top: 40px;
`;

const DarkProjectButton = styled(DarkButton)`
    margin-top: 40px;
`;

type ProjectsProps = {
    data: {
        allMdx: {
            edges: ProjectType[];
        };
    };
};

const renderProjectButton = ({ to, theme }: { to: string; theme: ThemeEnum }) => {
    let Button;
    if (theme === ThemeEnum.dark) {
        Button = DarkProjectButton;
    } else {
        Button = LightProjectButton;
    }
    return <Button to={to}>Read more</Button>;
};

export const Projects = ({
    data: {
        allMdx: { edges: projects }
    }
}: ProjectsProps) => {
    return (
        <Layout title="CT Gao | Projects">
            {projects.map(({ node: project }, index) => (
                <Project
                    key={project.fields.id}
                    style={{ backgroundColor: project.frontmatter.backgroundColor }}
                    textColor={project.frontmatter.textColor}
                >
                    <Fade {...(index % 2 === 0 ? { left: true } : { right: true })}>
                        <PageWrapper>
                            <ProjectImage
                                fluid={
                                    project.frontmatter.image.childImageSharp.fluid
                                }
                            />
                            <ProjectTitle as="h2">
                                {project.frontmatter.title}
                            </ProjectTitle>
                            <ProjectSubtitle>
                                {project.frontmatter.subtitle}
                            </ProjectSubtitle>
                            <ProjectDescription>
                                {project.frontmatter.description}
                            </ProjectDescription>
                            {project.frontmatter.detailsPageLink &&
                                renderProjectButton({
                                    to: project.frontmatter.detailsPageLink,
                                    theme: project.frontmatter.textColor
                                })}
                        </PageWrapper>
                    </Fade>
                </Project>
            ))}
        </Layout>
    );
};

export default Projects;

export const pageQuery = graphql`
    query {
        allMdx(
            filter: { fields: { slug: { eq: null } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    fields {
                        id
                        slug
                    }
                    frontmatter {
                        title
                        subtitle
                        description
                        backgroundColor
                        textColor
                        detailsPageLink
                        image {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
