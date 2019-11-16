import { css } from '../lib/styled-components';

export const prismjsStyles = css`
    code[class*='language-'],
    pre[class*='language-'] {
        color: white;
        background: none;
        font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
        font-feature-settings: normal;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        margin-bottom: 0;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    /* Code blocks */
    pre[class*='language-'] {
        overflow: auto;
        padding: 1rem;
    }

    pre[class*='language-']::-moz-selection {
        /* Firefox */
        background: hsl(207, 4%, 16%);
    }

    pre[class*='language-']::selection {
        /* Safari */
        background: hsl(207, 4%, 16%);
    }

    /* Text Selection colour */
    pre[class*='language-']::-moz-selection,
    pre[class*='language-'] ::-moz-selection {
        text-shadow: none;
        background: hsla(0, 0%, 100%, 0.15);
    }

    pre[class*='language-']::selection,
    pre[class*='language-'] ::selection {
        text-shadow: none;
        background: hsla(0, 0%, 100%, 0.15);
    }

    /* Inline code */
    :not(pre) > code[class*='language-'] {
        border-radius: 0;
        background: rgb(173, 219, 103);
        color: #1a1a1a;
        padding: 0.1em 0.25em 0.05em;
        white-space: normal;
    }

    .token.attr-name {
        color: rgb(173, 219, 103);
        font-style: italic;
    }

    .token.comment {
        color: rgb(99, 119, 119);
    }

    .token.string,
    .token.url {
        color: rgb(173, 219, 103);
    }

    .token.variable {
        color: rgb(214, 222, 235);
    }

    .token.number {
        color: rgb(247, 140, 108);
    }

    .token.char,
    .token.constant,
    .token.function {
        color: rgb(130, 170, 255);
    }

    .token.builtin {
        color: rgb(173, 219, 103);
    }

    .token.punctuation {
        color: rgb(255, 203, 139);
    }

    .token.selector,
    .token.doctype {
        color: rgb(199, 146, 234);
        font-style: 'italic';
    }

    .token.class-name {
        color: rgb(255, 203, 139);
    }

    .token.tag {
        color: #f78c6c;
    }

    .token.operator {
        color: rgb(199, 146, 234);
    }

    .token.keyword {
        color: rgb(130, 170, 255);
    }

    .token.boolean {
        color: rgb(255, 88, 116);
    }

    .token.property {
        color: rgb(128, 203, 196);
    }

    .token.namespace {
        color: rgb(178, 204, 214);
    }

    pre[data-line] {
        padding: 1em 0 1em 3em;
        position: relative;
    }

    .gatsby-highlight {
        margin: 0.5em 0;
        padding: 1em;
        border-radius: 2px;
        background: #011627;
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        border: 2px solid rgba(128, 178, 237, 0.2);
    }

    /* Line highlighting makes the font way too big on mobile safari :( Don't know how to fix this bug */
    /*.gatsby-highlight-code-line {
        background-color: hsla(207, 95%, 15%, 1);
        display: block;
        margin-right: -1em;
        margin-left: -1em;
        padding-right: 1em;
        padding-left: 0.75em;
        border-left: 0.25em solid #80b2ed;
    }/*

    /*.gatsby-highlight pre[class*='language-'] {
        background-color: transparent;
        margin: 0;
        padding: 0;
        overflow: initial;
        float: left;
        min-width: 100%;
    } */
`;
