import React, { useState } from 'react';
import styled from 'styled-components';

import { ThemeEnum } from '../../utils/context';
import ThemeSwitch from '../ThemeSwitch';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

type BlogThemeSwitchProps = {};

const BlogThemeSwitch: BlogThemeSwitchProps = () => {
    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.light);
    const toggleTheme = () => {
        setTheme(previousTheme =>
            previousTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light
        );
    };

    return (
        <Wrapper>
            <ThemeSwitch theme={theme} onChange={toggleTheme} />
        </Wrapper>
    );
};

export default BlogThemeSwitch;
