// middlewares/elfinder.js
const elFinder = require('elfinder-node');
const path = require('path');

const roots = [
    {
        driver: elFinder.LocalFileStorage,
        URL: '/uploads/',
        path: path.join(__dirname, '../secureStorage'),
        permissions: { read: 1, write: 1, lock: 0 },
    },
    {
        driver: elFinder.LocalFileStorage,
        URL: '/404/',
        path: path.join(__dirname, '../secureStorage/private'),
        permissions: { read: 1, write: 0, lock: 1 },
    },
];

console.log('Initializing elFinder with roots:', roots);

const fileManagerConnector = elFinder(roots);

module.exports = fileManagerConnector;
