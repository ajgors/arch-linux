const path = require('path');


module.exports = {
    entry: './src/javascript.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets') 
    }
};

