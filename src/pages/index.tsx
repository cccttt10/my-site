import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Fade from 'react-reveal/Fade';

import BlogList from '../components/BlogList';
import { Button, Divider, PageWrapper } from '../components/Common';
import Github from '../components/icons/Github';
import Linkedin from '../components/icons/Linkedin';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { Title } from '../components/Typography';
import styled from '../lib/styled-components';
import {
    colors,
    media,
    textColor,
    textSize,
    transitionDuration
} from '../styles/common';
// eslint-disable-next-line no-unused-vars
import { FluidImage } from '../types/Image';
// eslint-disable-next-line no-unused-vars
import { Post } from '../types/Post';
// eslint-disable-next-line no-unused-vars
import { Project as ProjectType } from '../types/Project';
import { useTheme } from '../utils/context';

const Header = styled.div`
    position: relative;
    height: 560px;
    margin-top: -60px; // height of the menu
    display: flex;
    padding: 0 20px;

    ${media.medium`
        height: unset;
        margin-top: -140px; // height of the menu
        padding-top: calc(140px + 20px);
        padding-bottom: 80px;
    `};
`;

const StyledPageWrapper = styled(PageWrapper)`
    padding: 40px 0;
`;

const HeaderWrapper = styled(PageWrapper)`
    display: flex;
    height: 100%;

    ${media.medium`
        flex-direction: column;
    `};
`;

const HeaderImage = styled(Img)`
    left: 0;
    top: 0;
    width: 100vw;
    height: 560px;

    ${media.medium`
        height: 100%;
    `};

    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${props =>
            props.theme.color === 'light'
                ? colors.backgroundLight
                : colors.backgroundDark};
        opacity: 0.5;
    }
`;

const HeadshotWrapper = styled.div`
    z-index: 1;
    align-self: flex-end;
    flex-shrink: 0;

    ${media.medium`
        align-self: center;
    `};
`;

const Headshot = styled(Img)`
    height: 460px;
    width: 460px;

    ${media.medium`
        height: 250px;
        width: 250px;
        margin-bottom: 40px;
    `};
`;

const Intro = styled.div`
    align-self: center;
    margin-top: 20px;
    margin-left: 40px;
    z-index: 1;

    ${media.medium`
        margin-top: 0;
        margin-left: 0;
        text-align: center;
        width: 600px;
        max-width: 100%;
    `};
`;

const IntroDescription = styled.p`
    ${textSize.large};
    ${textColor.body};
    margin-bottom: 10px;

    ${media.medium`
        margin-bottom: 30px;
    `};
`;

const SocialMedia = styled.ul`
    display: flex;
    align-items: center;
    margin: 0 -10px;
    padding: 0;

    ${media.medium`
        justify-content: center;
    `};

    svg {
        width: 35px;
    }
`;

const SocialMediaItem = styled.li`
    margin: 0 10px;

    &:before {
        content: '';
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
`;

const RecentPosts = styled(Section)`
    align-items: center;
`;

const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    justify-content: center;
`;

const ProjectWrapper = styled.div`
    flex-basis: 360px;
    max-width: 100%;
`;

const LinkedProject = styled(Link)`
    text-decoration: none;
    color: inherit;
    transition: all ease-in-out ${transitionDuration.slow};
    display: block;

    &:hover {
        transform: scale(1.02);
        color: inherit;
    }
`;

const Project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-bottom: 60px;
`;

const ProjectTitle = styled.h3`
    ${textColor.title};
    ${textSize.large};
    font-family: 'Inter';
    margin: 0 0 10px 0;
`;

const ProjectImage = styled(Img)`
    margin-bottom: 20px;
    width: 240px;
    max-width: 100%;
`;

const ProjectDescription = styled.p`
    ${textSize.normal};
    text-align: center;
    margin: 0;
`;

const StyledTitle = styled(Title)`
    margin-bottom: 100px;

    ${media.medium`
        margin-bottom: 60px;
    `};
`;

const SocialMediaGroup = (): JSX.Element => {
    const { theme } = useTheme();
    const iconFill =
        theme === 'light' ? colors.textTitleLight : colors.textTitleDark;
    const items = [
        {
            link: 'https://github.com/chuntonggao',
            icon: <Github iconFill={iconFill} />
        },
        {
            link: 'https://www.linkedin.com/in/chuntonggao',
            icon: <Linkedin iconFill={iconFill} />
        }
    ];

    return (
        <SocialMedia>
            {items.map(item => (
                <SocialMediaItem key={item.link}>
                    <Link to={item.link}>{item.icon}</Link>
                </SocialMediaItem>
            ))}
        </SocialMedia>
    );
};

type HomePageProps = {
    data: {
        homeHeader: FluidImage;
        homeHeadshot: FluidImage;
        posts: {
            edges: Post[];
        };
        projects: {
            edges: ProjectType[];
        };
    };
};

const WrappedProject = ({
    projectPageLink,
    children
}: {
    projectPageLink: string | undefined;
    children: React.ReactNode;
}) => {
    if (projectPageLink) {
        return (
            <LinkedProject to={`${projectPageLink}`}>{children}</LinkedProject>
        ) as any;
    } else {
        return children;
    }
};

export const Home = ({
    data: {
        homeHeader,
        homeHeadshot,
        posts: { edges: posts },
        projects: { edges: projects }
    }
}: HomePageProps) => {
    return (
        <Layout>
            <Header>
                <HeaderWrapper>
                    <HeadshotWrapper>
                        <Headshot
                            fluid={homeHeadshot.childImageSharp.fluid}
                            alt="Chuntong Gao's headshot"
                        />
                    </HeadshotWrapper>
                    <Intro>
                        <IntroDescription>
                            `I am <strong>Chuntong Gao</strong>, a full-stack web
                            developer that builds web apps and writes articles on web
                            development ✌🏻`
                        </IntroDescription>
                        <SocialMediaGroup />
                    </Intro>
                </HeaderWrapper>
                <HeaderImage
                    fluid={homeHeader.childImageSharp.fluid}
                    alt={'Snowy mountains'}
                    style={{ position: 'absolute' }}
                />
            </Header>
            <StyledPageWrapper>
                <RecentPosts>
                    <Fade top>
                        <StyledTitle as="h2">Recent Posts</StyledTitle>
                    </Fade>
                    <BlogList posts={posts} />
                    <Fade bottom>
                        <Button to="/blog">See all posts</Button>
                    </Fade>
                </RecentPosts>
                <Fade>
                    <Divider />
                </Fade>
                <Section>
                    <Fade top>
                        <StyledTitle as="h2">Recent Projects</StyledTitle>
                    </Fade>
                    <Projects>
                        {projects.map(({ node: project }) => (
                            <ProjectWrapper key={project.fields.id}>
                                <WrappedProject
                                    projectPageLink={
                                        project.frontmatter.detailsPageLink
                                    }
                                >
                                    <Fade top>
                                        <Project>
                                            <ProjectImage
                                                fluid={
                                                    project.frontmatter.image
                                                        .childImageSharp.fluid
                                                }
                                            />
                                            <ProjectTitle>
                                                {project.frontmatter.title}
                                            </ProjectTitle>
                                            <ProjectDescription>
                                                {project.frontmatter.description}
                                            </ProjectDescription>
                                        </Project>
                                    </Fade>
                                </WrappedProject>
                            </ProjectWrapper>
                        ))}
                    </Projects>
                    <Fade bottom>
                        <Button to="/projects">See all projects</Button>
                    </Fade>
                </Section>
                <Fade>
                    <Divider />
                </Fade>
            </StyledPageWrapper>
        </Layout>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        homeHeader: file(name: { eq: "home-header" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        homeHeadshot: file(name: { eq: "home-headshot" }) {
            childImageSharp {
                fluid(maxHeight: 460) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        posts: allMdx(
            limit: 3
            sort: { fields: frontmatter___date, order: DESC }
            filter: { fields: { slug: { ne: null } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        formattedDate: date(formatString: "MMMM DD, YYYY")
                        dateTimeString: date(formatString: "YYYY-MM-DD")
                        banner {
                            childImageSharp {
                                fluid(maxHeight: 340, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        slug
                        categories
                    }
                    timeToRead
                }
            }
        }
        projects: allMdx(
            limit: 3
            sort: { fields: frontmatter___date, order: DESC }
            filter: { fields: { slug: { eq: null } } }
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
                        detailsPageLink
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240) {
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
