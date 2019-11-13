// Should import 'styled-components' from this file instead of from the node module
// This file has the context theme props to the styled components to allow for type
// completion
import * as styledComponents from 'styled-components';

import { Theme } from '../utils/context';

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
