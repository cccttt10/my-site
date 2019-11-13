/**
 * Show outline only on keyboard interaction
 *
 * Adds 'js-focus-visible' class to body and 'focus-visible' class to focused element
 *
 * https://github.com/WICG/focus-visible
 * https://davidwalsh.name/css-focus
 */
import 'focus-visible';

// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

import { ThemeProvider } from './src/lib/styled-components';
import { ContextThemeProvider, useTheme } from './src/utils/context';

const Wrapper = ({ children }) => {
    const { theme } = useTheme();

    return <ThemeProvider theme={{ color: theme }}>{children}</ThemeProvider>;
};

export const wrapRootElement = ({ element }) => {
    return (
        <ContextThemeProvider>
            <Wrapper>{element}</Wrapper>
        </ContextThemeProvider>
    );
};
