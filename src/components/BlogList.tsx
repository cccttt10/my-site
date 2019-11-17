import React from 'react';
import styled from 'styled-components';

import { media } from '../styles/common';
// eslint-disable-next-line no-unused-vars
import { Post } from '../types/Post';
import BlogCard from './BlogCard';

const BlogList = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-left: -20px;
    margin-right: -20px; */

    ${media.large`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    `};
`;

type BlogListComponentProps = {
    posts: (Post | undefined)[];
};

const BlogListComponent = ({ posts }: BlogListComponentProps) => {
    return (
        <BlogList>
            {posts.map(post => {
                if (post !== undefined) {
                    return <BlogCard key={post.node.id} post={post.node} />;
                }
            })}
        </BlogList>
    );
};

export default BlogListComponent;
