const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

const BUILD_FOLDER = './home-27/dist/';
const SRC_FOLDER = './home-27/js/*.js';

function watcher() {
    return gulp.watch(SRC_FOLDER, jsPrep)
};

function minify() {
    return gulp.src(SRC_FOLDER)
        .pipe(uglify())
        .pipe(gulp.dest(BUILD_FOLDER));
}
function jsPrep() {
    return gulp.src(SRC_FOLDER)
        .pipe(uglify())
        .pipe(concat('build.js'))
        .pipe(gulp.dest(BUILD_FOLDER));
}

gulp.task('default', gulp.series(minify));
gulp.task('default', gulp.series(jsPrep, watcher));


