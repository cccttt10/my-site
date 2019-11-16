// prettier-ignore
module.exports = {
    './**/*.{ts,tsx}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'tsc --noEmit --listFiles --jsx "react" --esModuleInterop --skipLibCheck',
        'git add'
    ],
    './**/*.{js}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'git add'
    ]
};
