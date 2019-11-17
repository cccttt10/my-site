import React from 'react';

import styled from '../../../src/lib/styled-components';
import { primitiveColors, textSize } from '../../../src/styles/common';

const StyledInput = styled.input`
    display: none;

    &:not(:checked) ~ div {
        max-height: 0px;
        transition-delay: 0s;
    }
    & ~ span {
    }
    &:checked ~ span {
        transform: rotate(-225deg);
        opacity: 1;
    }
`;

const StyledList = styled.ul`
    width: 500px;
    max-width: 100%;
    border-left: 2px solid ${primitiveColors.aero};
    border-right: 2px solid ${primitiveColors.aero};
    padding: 0;
    margin: 40px auto;

    li {
        margin-bottom: 2px;
        position: relative;

        &:before {
            display: none;
        }

        &:last-child {
            margin-bottom: 0;
            border-bottom: 2px solid ${primitiveColors.aero};
        }
    }

    label {
        display: block;
        padding: 20px 40px 20px 20px;
        background: ${primitiveColors.aero};
        cursor: pointer;
        color: ${primitiveColors.oldGloryBlue};
        font-size: ${textSize.normal};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover ~ span {
            opacity: 1;
        }
    }

    div {
        max-height: 300px;
        overflow: hidden;
        transition: max-height 400ms ease;
        transition-delay: 400ms;
    }

    p {
        padding: 20px;
        opacity: 0.9;
    }

    span {
        display: block;
        position: absolute;
        top: 32px;
        right: 20px;
        width: 7px;
        height: 7px;
        border-top: 2px solid ${primitiveColors.oldGloryBlue};
        border-right: 2px solid ${primitiveColors.oldGloryBlue};
        transform: rotate(-45deg);
        transition: transform 400ms ease;
        opacity: 0.3;
    }
`;

const Accordion = () => {
    return (
        <StyledList>
            <li>
                <StyledInput id="item-1" type="radio" name="list" defaultChecked />
                <label htmlFor="item-1">Step 1</label>
                <span />
                <div>
                    <p>The content in this accordion is beyond lame.</p>
                </div>
            </li>
            <li>
                <StyledInput id="item-2" type="radio" name="list" />
                <label htmlFor="item-2">Step 2</label>
                <span />
                <div>
                    <p>
                        Just save yourself the trouble and do not bother looking at
                        the content of the last step.
                    </p>
                </div>
            </li>
            <li>
                <StyledInput id="item-3" type="radio" name="list" />
                <label htmlFor="item-3">Step 3</label>
                <span />
                <div>
                    <p>💩</p>
                </div>
            </li>
        </StyledList>
    );
};

export default Accordion;
