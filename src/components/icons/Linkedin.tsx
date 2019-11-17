import React from 'react';

import { colors } from '../../styles/common';

type LinkedinProps = {
    iconFill?: string;
};

const Linkedin = ({ iconFill = colors.textTitleLight }: LinkedinProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            x="0"
            y="0"
            viewBox="0 0 50 50"
        >
            <path
                d="M8 3.01c-3.47 0-5.99 2.08-5.99 4.94 0 2.87 2.58 5.04 5.99 5.04 3.47 0 5.99-2.12 5.99-5.1-.16-2.87-2.63-4.88-5.99-4.88zM3 15c-.55 0-1 .45-1 1v29c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V16c0-.55-.45-1-1-1H3zm15 0c-.55 0-1 .45-1 1v29c0 .55.45 1 1 1h9a1 1 0 001-1V29.5c0-2.37 1.82-4.3 4.14-4.48.12-.02.24-.02.36-.02s.24 0 .36.02c2.32.18 4.14 2.11 4.14 4.48V45a1 1 0 001 1h9c.55 0 1-.45 1-1V28c0-6.47-3.47-13-11.21-13-3.52 0-6.18 1.36-7.79 2.49V16c0-.55-.45-1-1-1H18z"
                fill={iconFill}
            ></path>
        </svg>
    );
};

export default Linkedin;
