/* eslint-disable max-lines */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const PAGINATION_OFFSET = 10;

const pluckCategories = posts =>
    Object.keys(
        posts.reduce((acc, value) => {
            value.node.fields.categories.forEach(category => {
                if (!acc[category]) {
                    acc[category] = category;
                }
            });

            return acc;
        }, {})
    );

const groupByCategory = posts =>
    posts.reduce((acc, value) => {
        value.node.fields.categories.forEach(category => {
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(value);
        });
        return acc;
    }, {});

const createPaginatedPages = (createPage, posts, pathPrefix, context) => {
    const pages = posts.reduce((acc, value, index) => {
        const pageIndex = Math.floor(index / PAGINATION_OFFSET);

        if (!acc[pageIndex]) {
            acc[pageIndex] = [];
        }

        acc[pageIndex].push(value.node.id);

        return acc;
    }, []);

    pages.forEach((page, index) => {
        const previousPagePath = `${pathPrefix}/${index + 1}`;
        const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`;

        createPage({
            path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
            component: path.resolve(`src/templates/blog.tsx`),
            context: {
                pagination: {
                    page,
                    nextPagePath: index === 0 ? null : nextPagePath,
                    previousPagePath:
                        index === pages.length - 1 ? null : previousPagePath,
                    pageCount: pages.length,
                    pathPrefix
                },
                ...context
            }
        });
    });
};

const createCategoryPages = (createPage, posts) => {
    const categories = pluckCategories(posts);

    const categorizedPosts = groupByCategory(posts);

    Object.keys(categorizedPosts).forEach(category => {
        createPaginatedPages(
            createPage,
            categorizedPosts[category],
            `/categories/${category}`,
            {
                categories,
                activeCategory: category
            }
        );
    });
};

const createPosts = (createPage, posts) => {
    posts.forEach(({ node }, i) => {
        const prev = i === 0 ? null : posts[i - 1].node;
        const next = i === posts.length - 1 ? null : posts[i + 1].node;

        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.tsx`),
            context: {
                id: node.id,
                prev,
                next
            }
        });
    });
};

const createBlog = (createPage, posts) => {
    const categories = pluckCategories(posts);

    createPaginatedPages(createPage, posts, '/blog', { categories });
};

exports.createPages = ({ actions, graphql }) =>
    graphql(`
        query {
            posts: allMdx(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { fields: { slug: { ne: null } } }
            ) {
                edges {
                    node {
                        id
                        excerpt(pruneLength: 250)
                        fields {
                            title
                            slug
                            categories
                        }
                    }
                }
            }
        }
    `).then(({ data, errors }) => {
        if (errors) {
            return Promise.reject(errors);
        }

        // Projects are filtered out at the GraphQL query level
        const { edges: posts } = data.posts;

        createBlog(actions.createPage, posts);
        createPosts(actions.createPage, posts);
        createCategoryPages(actions.createPage, posts);
    });

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            alias: {
                $components: path.resolve(__dirname, 'src/components')
            }
        }
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
        createNodeField({
            name: 'id',
            node,
            value: node.id
        });

        createNodeField({
            name: 'title',
            node,
            value: node.frontmatter.title
        });

        createNodeField({
            name: 'description',
            node,
            value: node.frontmatter.description
        });

        createNodeField({
            name: 'slug',
            node,
            value: node.frontmatter.slug
        });

        createNodeField({
            name: 'date',
            node,
            value: node.frontmatter.date || ''
        });

        createNodeField({
            name: 'editLink',
            node,
            value: `https://github.com/chuntonggao/my-site/edit/master${node.fileAbsolutePath.replace(
                __dirname,
                ''
            )}`
        });

        createNodeField({
            name: 'banner',
            node,
            banner: node.frontmatter.banner
        });

        createNodeField({
            name: 'categories',
            node,
            value: node.frontmatter.categories || []
        });

        createNodeField({
            name: 'keywords',
            node,
            value: node.frontmatter.keywords || []
        });
    }
};
