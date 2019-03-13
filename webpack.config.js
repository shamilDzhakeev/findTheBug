const path = require('path');
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
