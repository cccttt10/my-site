// All credit goes to [@thekitze](https://twitter.com/thekitze) for the styling of the theme switcher
// Check out his cool app [here](https://twizzy.app/)

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { transitionDuration } from '../styles/common';
// eslint-disable-next-line no-unused-vars
import { ThemeEnum } from '../utils/context';
import MoonSVG from './icons/Moon';

const width = 56;
const height = 26;
const circleWidth = height - 6;
const sideOffset = 4;

export const Wrapper = styled.div`
    display: inline-block;
    border-radius: ${height / 2}px;
    overflow: hidden;
    will-change: transform;
`;

export const StyledThemeSwitch = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: ${height}px;
    width: ${width}px;
    border-radius: ${height / 2}px;
    transition: all ${transitionDuration.normal} linear;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }

    &:active {
        transform: scale(1.03);
    }

    ${props => {
        if (props.theme.color === 'light') {
            return `
                background-color: #80B2ED;

                &:hover {
                    background-color: #7babe6;
                }

            `;
        } else {
            return `
                background-color: #595dde;

                &:hover {
                    background-color: #5559cc;
                }
            `;
        }
    }};
`;

export const Moon = styled(MoonSVG)`
    position: absolute;
    transition: all ${transitionDuration.normal} ease-in;
    width: 13px;
    height: 13px;
    fill: white;

    ${({ theme }) => {
        if (theme.color === 'light') {
            return `
                transform: translateY(30px);
                opacity: 0;
            `;
        } else {
            return `opacity: 1;`;
        }
    }};
`;

export const Star = styled.div<{
    size: number;
    x: number;
    y: number;
    index: number;
}>`
    border-radius: 100%;
    width: 3px;
    height: 3px;
    background-color: white;
    position: absolute;

    ${({ size, x, y, index, theme }) => `
        transition: all ${50 * index}ms linear;
        width: ${size}px;
        height: ${size}px;
        top: ${2 + y}px;
        left: ${4 + x}px;

        ${theme.color === 'light' &&
            `
            opacity: 0;
            transform: translateY(10px);
        `}
    `};
`;

export const Stars = styled.div`
    ${({ theme }) => theme.color === 'dark' && `opacity: 1;`};
`;

export const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 100%;
    width: ${circleWidth}px;
    overflow: hidden;
    height: ${circleWidth}px;
    transition: all ${transitionDuration.normal} ease-in;

    ${({ theme }) => {
        const translateX =
            theme.color === 'light' ? sideOffset : width - circleWidth - sideOffset;

        if (theme.color === 'light') {
            return `
                transform: translateX(${translateX}px);
                background-color: #fddf75;
                border: 3px solid #d6b05eb5;

                &:hover {
                    background-color: #fff0bb;
                }
            `;
        } else {
            return `
                transform: translateX(${translateX}px);
                background-color: rgba(255,255,255,0.4);
                border: 2px solid rgba(255, 255, 255, 0.9);

                &:hover {
                    background-color: rgba(255,255,255,0.3);
                }
            `;
        }
    }};
`;

type ThemeSwitchProps = {
    className?: string;
    theme: ThemeEnum;
    onChange: React.MouseEventHandler<HTMLDivElement>;
};

const ThemeSwitch = ({ className, theme, onChange }: ThemeSwitchProps) => {
    return (
        <ThemeProvider theme={{ color: theme }}>
            <div className={className}>
                <Wrapper
                    onClick={onChange}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e: any) => {
                        if (e.which === 13 || e.which === 32) {
                            onChange(e);
                        }
                    }}
                >
                    <StyledThemeSwitch>
                        <Stars>
                            <Star index={1} size={2} x={10} y={3} />
                            <Star index={2} size={1} x={3} y={7} />
                            <Star index={3} size={1} x={12} y={18} />
                            <Star index={4} size={1} x={15} y={10} />
                            <Star index={5} size={1} x={19} y={4} />
                            <Star index={6} size={2} x={22} y={14} />
                        </Stars>
                        <Circle>
                            <Moon />
                        </Circle>
                    </StyledThemeSwitch>
                </Wrapper>
            </div>
        </ThemeProvider>
    );
};

export default ThemeSwitch;
