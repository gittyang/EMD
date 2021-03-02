
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error',sass.logError)) 
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
      notify: false,
      proxy: '127.0.0.1:5500/build/index.html',
      ghostMode: false
    });
    gulp.watch('src/scss/*.scss', style)
    gulp.watch('./**/*.html').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;
