const path = require('path');
<<<<<<< HEAD
const distPath = path.join(__dirname, '/public');

module.exports = {
    entry: {
        main: './src/index.js'
      },
      output: {
        filename: 'main.js',
        path: distPath
      }
}
=======

module.exports = {
    entry:'./mainscript.js',
    output: {
        filename: 'mainboundle.js',
        path: path.resolve(__dirname, 'dist'),
        library:'mainscript'
    }
    
};
>>>>>>> 795663107111cf41cc92680ee879149a0af88f08
