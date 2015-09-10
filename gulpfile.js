var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('default', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

