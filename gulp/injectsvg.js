module.exports = function(gulp) {
    // node module
    var path = require('path');
    var fileset = require('fileset');

    // gulp module
    var inject = require('gulp-inject');

    // path
    var svgPath = "src/img/**/*.svg";
    var htmlPath = "src/**/*.html";


    // injectsvg
    // Write following comments in HTML and inject svg code between comments.
    /*

    usage:
    <!-- (path-to-file)/(filename-without-extension):svg --><!-- endinject -->

    example:
    [/asset/img/circle.svg]
    <!-- asset/img/circle:svg --><!-- endinject -->

     */
    gulp.task('injectsvg', function () {

        var extension,
            extnameFiles;

        function fileContents (filePath, file) {
            return file.contents.toString();
        }

        var htmlSrc = gulp.src('src/**/*.html');


        fileset(svgPath, function(err, files) {

            if (err) return console.error(err);

            for (var i = 0; i < files.length; i++) {

                extension = path.extname(files[i]);
                extnameFiles = files[i].replace(extension, "");

                htmlSrc = htmlSrc.pipe(inject(gulp.src(files[i]), {
                    transform: fileContents,
                    name: extnameFiles
                }));

            };

            htmlSrc.pipe(gulp.dest('dest/'));

        });

    });
};
