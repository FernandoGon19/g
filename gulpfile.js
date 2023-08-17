const gulp = require('gulp');

/*Compila Sass*/
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

/*Comprime JS*/
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate')

function comprimirJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

/*Comprime ImG*/
const imagemin = require('gulp-imagemin')

function comprimirIMG() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}



exports.default = function() {
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false}, gulp.series(comprimirJS))
    gulp.watch('./source/images/*',{ignoreInitial: false}, gulp.series(comprimirIMG))
}
