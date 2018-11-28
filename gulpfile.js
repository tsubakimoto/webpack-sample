const gulp = require('gulp');
const pug = require('gulp-pug');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// pug
gulp.task('pug', () => {
    return gulp.src(['./src/**/*.pug', '!./pug/**/_*.pug'])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'));
});

// webpack
gulp.task('webpack', () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest('./dist/'));
});