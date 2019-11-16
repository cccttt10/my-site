/* eslint-disable no-unused-vars */
import { ThemeEnum } from '../utils/context';
import { FixedImage, FluidImage } from './Image';

export type Project = {
    node: {
        fields: {
            id: number;
            slug: string;
        };
        frontmatter: {
            title: string;
            subtitle: string;
            description: string;
            image: FixedImage & FluidImage;
            textColor: ThemeEnum;
            backgroundColor: string;
            detailsPageLink?: string;
            banner: {
                publicURL: string | null;
            };
        };
    };
};
