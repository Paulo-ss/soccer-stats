// Importando o gulp
const gulp = require('gulp');
// Importando o SASS compiler
const sass = require('gulp-dart-sass');
// Importando o browser-sync
const browserSync = require('browser-sync');

// Função para compilar o SASS
function sassComp() {
  return gulp
    .src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
}

// Função que inicia o browser-sync
function browser() {
  browserSync.init({
    proxy: './',
  });
}

// Função que observa os arquivos
function watch() {
  gulp.watch('./scss/*.scss', sassComp);
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
