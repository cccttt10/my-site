/* eslint-disable no-unused-vars */
import { FluidImage } from './Image';

export type Post = {
    node: {
        id: string;
        frontmatter: {
            title: string;
            description: string;
            formattedDate: string;
            dateTimeString: string;
            banner: FluidImage;
            slug: string;
            categories: string[];
        };
        timeToRead: number;
    };
};
