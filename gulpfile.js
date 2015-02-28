// gulp
var gulp = require('gulp');

require('./gulp/injectsvg.js')(gulp);

// default runner
gulp.task("default",["injectsvg"]);