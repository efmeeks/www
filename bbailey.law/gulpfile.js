/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    compressor = require('gulp-compressor'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

// html compressor
gulp.task('html', function () {
    return gulp.src('path/to/*.html')
        .pipe(compressor({
            'remove-intertag-spaces': true,
            'simple-bool-attr': true,
            'compress-js': true,
            'compress-css': true
        }))
        .pipe(gulp.dest('path/to/output/'));
});

// js compressor
gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(compressor())
        .pipe(gulp.dest('dev/js'));
});

// css compressor
gulp.task('css', function () {
    return gulp.src('src/css/*.css')
        .pipe(compressor())
        .pipe(gulp.dest('dev/css'));
});
