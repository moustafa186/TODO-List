var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            port:3000,
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['webserver']);