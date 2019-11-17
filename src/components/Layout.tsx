import { MDXProvider } from '@mdx-js/react';
import { graphql, StaticQuery, withPrefix } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Poppins from '../../assets/fonts/Poppins/Poppins';
import styled, { createGlobalStyle } from '../lib/styled-components';
import { colors, textColor, textSize } from '../styles/common';
import { prismjsStyles } from '../styles/prismjs';
import Footer, { footerHeight } from './Footer';
import mdxComponents from './mdx';
import Menu, { menuHeight } from './Menu';

const GlobalStyles = createGlobalStyle`
  ${Poppins};
  ${prismjsStyles}

  * {
      box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    line-height: 1.8;
    ${textSize.normal};
    ${textColor.body};
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${props =>
        props.theme && props.theme.color === 'light'
            ? colors.backgroundLight
            : colors.backgroundDark};
  }

  pre {
      margin-top: 0;
  }

  ${() => {
      return null;
  }}

  strong {
      font-weight: 600;
  }

  ol,
  ul {
      padding: 0;
      margin: 0;
      list-style: none;
      line-height: 1.7;
      padding-left: 15px;

      li {
          margin-bottom: 8px;
      }
  }

  ul {
      list-style: none;

      li {
          position: relative;

          &::before {
              content: '-';
              position: absolute;
              left: -20px;
          }
      }
  }

  a {
      color: ${colors.linkInactiveLight};

      &:hover {
          color: ${colors.linkActiveLight};
      }
  }

    /**
    * This will hide the focus indicator if the element receives focus via the mouse,
    * but it will still show up on keyboard focus.
    */
    .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
    }

    .caption {
        font-style: italic;
        text-align: center;
        display: block;
        margin-top: -25px;
        margin-bottom: 40px;

        + h2,
        + h3,
        + h4,
        + h5 {
            margin-top: 0;
        }
    }
`;

const Main = styled.main`
    min-height: calc(100vh - ${footerHeight}px - ${menuHeight}px);
`;

type LayoutProps = {
    children: React.ReactNode;
    frontmatter?: {
        title: string | null;
        description: string | null;
        banner: {
            publicURL: string | null;
        };
        slug?: string;
        publicationDate?: string;
        updatedAtDate?: string;
    };
    title?: string | null;
    hideMenu?: boolean;
    hideFooter?: boolean;
    isPost?: boolean;
};

export const Layout = ({
    frontmatter = { title: null, description: null, banner: { publicURL: null } },
    title: pageTitle = null,
    hideMenu = false,
    hideFooter = false,
    children,
    isPost = false
}: LayoutProps) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            title
                            description
                            author
                            siteUrl
                        }
                    }
                }
            `}
            render={data => {
                const {
                    title: siteTitle,
                    description: siteDescription,
                    siteUrl
                } = data.site.siteMetadata;

                const {
                    title: frontmatterTitle,
                    description: frontmatterDescription,
                    banner: { publicURL },
                    slug,
                    publicationDate,
                    updatedAtDate
                } = frontmatter;

                const title = pageTitle || frontmatterTitle || siteTitle;
                const description = frontmatterDescription || siteDescription;

                let schemaArticle = null;
                if (isPost) {
                    schemaArticle = {
                        '@context': 'http://schema.org',
                        '@type': 'Article',
                        author: {
                            '@type': 'Person',
                            name: 'Robert Cooper'
                        },
                        datePublished: publicationDate,
                        dateModified: updatedAtDate
                            ? updatedAtDate
                            : publicationDate,
                        description: frontmatterDescription,
                        headline: frontmatterTitle,
                        inLanguage: 'en-US',
                        url: `${siteUrl}${slug}`,
                        name: frontmatterTitle,
                        image: {
                            '@type': 'ImageObject',
                            url: `${siteUrl}${publicURL}`
                        },
                        mainEntityOfPage: `${siteUrl}${slug}`,
                        publisher: {
                            '@type': 'Organization',
                            name: 'Robert Cooper',
                            logo: {
                                '@type': 'ImageObject',
                                url: `${siteUrl}/logo.png`
                            }
                        }
                    };
                }

                return (
                    <>
                        <GlobalStyles />
                        <Helmet title={title}>
                            <html lang="en" />
                            <meta name="description" content={description} />

                            <meta
                                name="viewport"
                                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                            />
                            <meta
                                name="twitter:card"
                                content="summary_large_image"
                            />
                            <meta name="twitter:site" content="@RobertCooper_RC" />

                            <meta property="og:title" content={title} />
                            <meta
                                property="og:image"
                                content={`${siteUrl}${publicURL ||
                                    withPrefix('/social-sharing.jpg')}`}
                            />
                            <meta property="og:description" content={description} />
                            <meta property="og:type" content="website" />
                        </Helmet>
                        {!hideMenu && <Menu />}
                        <MDXProvider components={mdxComponents}>
                            <Main>{children}</Main>
                        </MDXProvider>
                        {!hideFooter && <Footer />}
                        {isPost && (
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify(schemaArticle)
                                }}
                            />
                        )}
                    </>
                );
            }}
        />
    );
};

export default Layout;
