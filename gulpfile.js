const gulp = require('gulp');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles-full', function () {
    return gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(gulp.dest('./dist'));
});

gulp.task('styles-min', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(rename({
            suffix: '.min',
            prefix: ''
        }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.parallel('styles-full', 'styles-min'));