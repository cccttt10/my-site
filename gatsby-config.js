/* eslint-disable camelcase */

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        siteUrl: ``,
        author: `Chuntong Gao`,
        title: `Chuntong Gao`,
        description: `The web development blog and project portfolio of Chuntong Gao, a student web developer based in Vancouver 🇨🇦.`,
        imagePath: `/social-sharing.jpg`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/projects`,
                name: `projects`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/assets/images`,
                name: `images`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: ['.mdx', '.md'],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            quality: 100,
                            maxWidth: 800,
                            backgroundColor: `none`,
                            withWebp: true
                        }
                    },
                    `gatsby-remark-copy-linked-files`,
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: `language-`,
                            noInlineHighlight: true,
                            aliases: {}
                        }
                    },
                    `gatsby-remark-embedder`
                ]
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Front-end web developer`,
                short_name: `Chuntong`,
                start_url: `/`,
                background_color: `#F9FCFF`,
                theme_color: `#09203A`,
                display: `standalone`,
                icon: `assets/logo.png`
            }
        },

        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-80196253-8`
            }
        }
    ]
};
