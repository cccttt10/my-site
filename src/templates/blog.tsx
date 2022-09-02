import { graphql } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';

import BlogList from '../components/BlogList';
import { PaddedPageWrapper } from '../components/Common';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { Title } from '../components/Typography';
import styled from '../lib/styled-components';
import { media } from '../styles/common';
// eslint-disable-next-line no-unused-vars
import { Post } from '../types/Post';

const StyledTitle = styled(Title)`
    margin-bottom: 100px;

    ${media.medium`
        margin-bottom: 60px;
    `};
`;

const Pagination = styled.ul`
    display: flex;
    padding: 0;
`;

const PaginationItem = styled.li<{ position: string }>`
    margin-left: ${props => (props.position === 'right' ? 'auto' : 0)};

    &:before {
        display: none;
    }
`;

const PaginationLink = styled(Link)``;

type BlogProps = {
    data: {
        allMdx: {
            edges: Post[];
        };
    };
    pageContext: {
        pagination: {
            page: string[];
            nextPagePath: string;
            previousPagePath: string;
        };
    };
};

const Blog = ({ data: { allMdx }, pageContext: { pagination } }: BlogProps) => {
    const { page, nextPagePath, previousPagePath } = pagination;

    const posts = page.map(id => allMdx.edges.find(post => post.node.id === id));

    return (
        <Layout title="CT Gao | Blog">
            <PaddedPageWrapper>
                <Fade top>
                    <StyledTitle>Blog</StyledTitle>
                </Fade>
                <BlogList posts={posts} />
                <Pagination>
                    {nextPagePath && (
                        <PaginationItem position="left">
                            <PaginationLink to={nextPagePath}>
                                Newer Posts
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    {previousPagePath && (
                        <PaginationItem position="right">
                            <PaginationLink to={previousPagePath}>
                                Older Posts
                            </PaginationLink>
                        </PaginationItem>
                    )}
                </Pagination>
            </PaddedPageWrapper>
        </Layout>
    );
};

export default Blog;

export const pageQuery = graphql`
    query {
        allMdx {
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
    }
`;
