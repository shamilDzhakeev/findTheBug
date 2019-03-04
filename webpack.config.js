const path = require('path');

module.exports = {
    entry:'./mainscript.js',
    output: {
        filename: 'mainboundle.js',
        path: path.resolve(__dirname, 'dist'),
        library:'mainscript'
    }
    
};