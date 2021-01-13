var path = require('path');

require('child_process').exec("npm config get prefix", function(err, stdout, stderr) {
    var webpackPath = path.resolve(path.join(__dirname, 'node_modules', 'webpack-cli', 'bin', 'cli.js'));
    console.log(webpackPath);
    require(webpackPath);
});