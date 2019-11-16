import React from 'react';

import { Divider } from '../Common';
import Link from '../Link';
import Paragraph from './Paragraph';
import Quote from './Quote';
import Sandbox from './Sandbox';
import SubtitleH2 from './SubtitleH2';
import SubtitleH3 from './SubtitleH3';
import SubtitleH4 from './SubtitleH4';
import Title from './Title';

export default {
    a: (props: { theme: string; href: string; children: React.ReactChild }) => (
        <Link to={props.href} {...props}>
            {props.children}
        </Link>
    ),
    h1: (props: { theme: string }) => <Title {...props} />,
    h2: (props: { theme: string }) => <SubtitleH2 {...props} />,
    h3: (props: { theme: string }) => <SubtitleH3 {...props} />,
    h4: (props: { theme: string }) => <SubtitleH4 {...props} />,
    p: (props: { theme: string }) => <Paragraph {...props} />,
    hr: (props: { theme: string }) => <Divider {...props} />,
    blockquote: (props: {
        theme: string;
        className?: string;
        children: React.ReactChild;
    }) =>
        props.className && props.className === 'twitter-tweet' ? (
            <blockquote className={props.className}>{props.children}</blockquote>
        ) : (
            <Quote {...props} />
        ),
    Sandbox: (props: { src: string; title: string }) => <Sandbox {...props} />,
    Link: (props: { to: string; children: React.ReactNode }) => <Link {...props} />
};
