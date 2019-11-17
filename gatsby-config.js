/* eslint-disable camelcase */

module.exports = {
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
                            withWebp: true
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
                name: `Full-stack web developer`,
                short_name: `Chuntong`,
                start_url: `/`,
                theme_color: `#09203A`
            },
            resolve: `gatsby-plugin-manifest`
        }
        // {
        //     options: {
        //         trackingId: `UA-80196253-8`
        //     },
        //     resolve: `gatsby-plugin-google-analytics`
        // }
    ],
    siteMetadata: {
        author: `Chuntong Gao`,
        description: `The web development blog and project portfolio of Chuntong Gao, a student web developer based in Vancouver 🇨🇦.`,
        imagePath: `/social-sharing.jpg`,
        siteUrl: ``,
        title: `Chuntong Gao`
    }
};
