import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Divider, PaddedPageWrapper } from '../components/Common';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { Title } from '../components/Typography';
import { css } from '../lib/styled-components';
import {
    colors,
    media,
    pageWidth,
    textSize,
    transitionDuration
} from '../styles/common';
// eslint-disable-next-line no-unused-vars
import { PageContext } from '../types/PageContext';
import ScrollProgress from '../utils/scrollProgress';

const postContentPadding = `20px`;

const StyledPaddedPageWrapper = styled(PaddedPageWrapper)`
    ${pageWidth.small}
`;

const ProgressContainer = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    height: 10px;
`;

const ProgressBar = styled.div`
    height: 10px;
    background: ${props =>
        props.theme.color === 'light'
            ? colors.textTitleLight
            : colors.textTitleDark};
`;

const PostTitle = styled(Title)`
    text-align: left;
    margin: 0;
    margin-bottom: 100px;

    ${media.medium`
        margin-bottom: 60px;
    `};

    ${media.small`
        text-align: center;
    `};
`;

const Date = styled.time`
    display: block;
    margin-bottom: 40px;
    font-weight: 100;
    ${textSize.small}
    text-align: right;

    ${media.small`
        text-align: center;
    `};
`;

const MDXContent = styled.div`
    hr {
        + h2,
        + h3,
        + h4,
        + h5 {
            margin-top: 0px;
        }
    }

    h2,
    h3,
    h4,
    h5 {
        + iframe {
            margin-top: 20px;
        }
    }

    img {
        max-width: 100%;
    }

    iframe {
        margin: 40px 0;
    }

    code:not([class*='language-']) {
        font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
        font-size: 1.6rem;
        border-radius: 0.3em;
        background: ${props =>
            props.theme.color === 'light'
                ? colors.inlineCodeLight
                : colors.inlineCodeDark};
        padding: 0.15em 0.2em 0.05em;
        white-space: normal;

        ${media.small`
          font-size: 1.4rem;
        `}
    }

    .gatsby-highlight {
        margin-top: 40px;
        margin-bottom: 40px;
        /* I can't get this styles to load on initial app load :( */
        /* ${props =>
            props.theme.color === 'dark' &&
            `border: 2px solid ${colors.borderDark}`}; */

        ${media.small`
            margin-left: -${postContentPadding};
            margin-right: -${postContentPadding};
            border-left: 0;
            border-right: 0;
        `} 
    }

    .gatsby-resp-image-wrapper {
        margin: 40px 0;
    }

    .token-line {
        line-height: 1.8;
    }

    img {
        display: block;
        margin: 40px 0;
    }

    .twitter-tweet {
        margin: auto;
    }
`;

const CategoriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`;

const CategoriesLabel = styled.span`
    font-weight: 600;
    margin-bottom: 10px;
`;

const StyledCategoryList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const CategoryListItem = styled.li`
    padding: 0 10px;
    margin: 0;

    &:before {
        content: '';
    }
`;

const PostWrapperStyles = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    line-height: 1.5;
    border-radius: 3px;
    border: 2px solid
        ${({ theme }) =>
            theme.color === 'light' ? colors.borderLight : colors.borderDark};
    padding: 10px ${postContentPadding};
    transition: border-color ease-in-out ${transitionDuration.normal};

    &:hover {
        border-color: ${({ theme }) =>
            theme.color === 'light'
                ? colors.linkInactiveLight
                : colors.linkInactiveDark};
    }
`;

const PostLabel = styled.span`
    font-weight: 600;
`;

const PostLinkTitle = styled.span``;

const PostLink = styled(Link)<{ type: 'next' | 'prev' }>`
    ${PostWrapperStyles};
    color: inherit;
    text-decoration: none;
    ${({ type }) =>
        type === 'next' &&
        css`
            margin-bottom: 20px;
            align-items: flex-end;
            text-align: right;
        `}

    &:hover {
        color: inherit;
    }
`;

const OtherPostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;

    ${media.small`
        margin-bottom: 40px;
    `};
`;

const EditPostWrapper = styled.div`
    ${textSize.small};
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;
`;

const CategoryList = ({ list = [] }: { list?: string[] }) => (
    <CategoriesWrapper>
        <CategoriesLabel>Categories:</CategoriesLabel>
        <StyledCategoryList>
            {list.map(category => (
                <CategoryListItem key={category}>
                    <Link to={`/categories/${category}`}>{category}</Link>
                </CategoryListItem>
            ))}
        </StyledCategoryList>
    </CategoriesWrapper>
);

interface PostProps {
    data: {
        mdx: any;
    };
    pageContext: PageContext;
}

const Post = (props: PostProps) => {
    const {
        data: { mdx },
        pageContext: { next, prev }
    } = props;

    const { editLink } = mdx.fields;

    const progressBar = useRef({ current: { style: { width: 0 } } } as any);

    useEffect(() => {
        const progressObserver = new ScrollProgress((x, y) => {
            progressBar.current.style.width = `${y * 100}%`;
        });

        return () => progressObserver.destroy();
    });

    const postUpdatedSinceFirstPublic =
        mdx.frontmatter.formattedUpdatedAtDate !==
            mdx.frontmatter.formattedPublicationDate &&
        mdx.frontmatter.formattedUpdatedAtDate !== null;

    return (
        <Layout frontmatter={mdx.frontmatter} isPost>
            <Helmet>
                <meta property="og:type" content="article" />
                <meta property="article:author" content="CT Gao" />
                <meta
                    property="article:published_time"
                    content={mdx.frontmatter.publicationDate}
                />
                <meta
                    property="article:modified_time"
                    content={
                        postUpdatedSinceFirstPublic
                            ? mdx.frontmatter.updatedAtDate
                            : mdx.frontmatter.publicationDate
                    }
                />
                {mdx.frontmatter.categories.map((category: string) => (
                    <meta key={category} property="article:tag" content={category} />
                ))}
            </Helmet>
            <ProgressContainer>
                <ProgressBar ref={progressBar} />
            </ProgressContainer>
            <StyledPaddedPageWrapper>
                {postUpdatedSinceFirstPublic ? (
                    <Date dateTime={mdx.frontmatter.updatedAtDate}>
                        updated on {mdx.frontmatter.formattedUpdatedAtDate}
                    </Date>
                ) : (
                    <Date dateTime={mdx.frontmatter.publicationDate}>
                        published on {mdx.frontmatter.formattedPublicationDate}
                    </Date>
                )}
                <PostTitle>{mdx.frontmatter.title}</PostTitle>

                <MDXContent>
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXContent>

                <Divider />

                <EditPostWrapper>
                    See a typo?&nbsp;
                    <Link to={editLink}>Edit post on GitHub</Link>
                </EditPostWrapper>

                <CategoryList list={mdx.frontmatter.categories} />

                {(next || prev) && (
                    <OtherPostsWrapper>
                        {prev && (
                            <PostLink type="next" to={prev.fields.slug}>
                                <PostLabel>Next:</PostLabel>
                                <PostLinkTitle>{prev.fields.title}</PostLinkTitle>
                            </PostLink>
                        )}
                        {next && (
                            <PostLink type="prev" to={next.fields.slug}>
                                <PostLabel>Previous:</PostLabel>
                                <PostLinkTitle>{next.fields.title}</PostLinkTitle>
                            </PostLink>
                        )}
                    </OtherPostsWrapper>
                )}
            </StyledPaddedPageWrapper>
        </Layout>
    );
};

export default Post;

export const pageQuery = graphql`
    query($id: String!) {
        mdx(fields: { id: { eq: $id } }) {
            id
            frontmatter {
                title
                description
                formattedPublicationDate: date(formatString: "MMMM DD, YYYY")
                publicationDate: date(formatString: "YYYY-MM-DD")
                formattedUpdatedAtDate: updatedAt(formatString: "MMMM DD, YYYY")
                updatedAtDate: updatedAt(formatString: "YYYY-MM-DD")
                # This banner is used in the layout component
                banner {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                slug
                categories
            }
            fields {
                editLink
            }
            body
        }
    }
`;
