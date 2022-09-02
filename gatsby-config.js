/* eslint-disable camelcase */

module.exports = {
    siteMetadata: {
        author: `CT Gao`,
        description: `I am CT Gao, a full stack engineer that builds modern web apps.`,
        imagePath: `/social-sharing.jpg`,
        siteUrl: `https://cgao.info`,
        title: `CT Gao`
    },
    pathPrefix: `/`,
    plugins: [
        {
            options: {
                name: `blog`,
                path: `${__dirname}/content/blog`
            },
            resolve: `gatsby-source-filesystem`
        },
        {
            options: {
                name: `projects`,
                path: `${__dirname}/content/projects`
            },
            resolve: `gatsby-source-filesystem`
        },
        {
            options: {
                name: `images`,
                path: `${__dirname}/assets/images`
            },
            resolve: `gatsby-source-filesystem`
        },
        {
            options: {
                extensions: ['.mdx', '.md'],
                gatsbyRemarkPlugins: [
                    {
                        options: {
                            backgroundColor: `none`,
                            maxWidth: 800,
                            quality: 100,
                            withWebp: true,
                            disableBgImage: true
                        },
                        resolve: `gatsby-remark-images`
                    },
                    `gatsby-remark-copy-linked-files`,
                    {
                        options: {
                            aliases: {},
                            classPrefix: `language-`,
                            noInlineHighlight: true
                        },
                        resolve: `gatsby-remark-prismjs`
                    },
                    `gatsby-remark-embedder`
                ]
            },
            resolve: `gatsby-plugin-mdx`
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        {
            options: {
                background_color: `#F9FCFF`,
                display: `standalone`,
                icon: `assets/logo.png`,
                name: `CT Gao - Full Stack Web Developer`,
                short_name: `CT Gao`,
                start_url: `/`,
                theme_color: `#09203A`
            },
            resolve: `gatsby-plugin-manifest`
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-139071088-2`
            }
        }
    ]
};
