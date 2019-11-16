import React from 'react';

type MoonProps = {
    className?: string;
};

const Moon = ({ className }: MoonProps) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="32"
            viewBox="0 0 30 32"
            className={className}
        >
            <title>Moon</title>
            <path d="M22.592 21.504q3.36 0 6.56-1.792-1.344 4.64-5.184 7.616t-8.8 2.976q-6.016 0-10.304-4.288t-4.288-10.336q0-4.928 2.976-8.768t7.584-5.216q-1.792 3.2-1.792 6.56 0 5.504 3.904 9.376t9.344 3.872z" />
        </svg>
    );
};

export default Moon;
