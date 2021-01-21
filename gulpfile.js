// Importando o gulp
const gulp = require('gulp');
// Importando o SASS compiler
const sass = require('gulp-dart-sass');
// Importando o browser-sync
const browserSync = require('browser-sync').create();

// Função para compilar o SASS
function sassComp() {
  return gulp
    .src('./scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
}

// Função que inicia o browser-sync
function browser() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
}

// Função que observa os arquivos
function watch() {
  gulp.watch('./scss/*.scss', sassComp);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

// Task para compilar o SASS
exports.sassComp = sassComp;
// Task que inicia o browser-sync
exports.browser = browser;
// Task watch
exports.watch = watch;

// Const para executar as tasks
const build = gulp.parallel(watch, sassComp, browser);
// Task default
exports.default = build;
