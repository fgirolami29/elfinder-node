const fs = require('fs-extra');
const { resolve } = require('path');
const base64 = require('base-64');


let FILEpath = '/secureStorage/sounds2/failed.wav';
let path = '/secureStorage/sounds2';

const encodePath = (path) => 'v0_' + base64.encode(path);


const url = (query = {}) => {
    return `/connector?${qs.stringify(query)}`;
  };


console.log(encodePath(path));