const gulp       = require("gulp");
const sass       = require("gulp-sass");
const cleanCSS   = require("gulp-clean-css");
const browerSync = require("browser-sync");
const concat     = require("gulp-concat");

function style(){
  return gulp.src("./js/**/*.scss")
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./app/css'));
}

function build(){
  return gulp.src("./js/**/*.scss")
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./app/css'));
}

function makeJsFile(){
  return gulp.src("./js/**/*.js")
    .pipe(concat('p6.js'))
    .pipe(gulp.dest('./app/js'));
}

function watch(){
  browerSync.init({
    server: {
      baseDir : "./app"
    }
  });
  gulp.watch("./js/**/*.scss", style);
  gulp.watch("./js/**/*.js", makeJsFile);
  gulp.watch("./app/").on("change", browerSync.reload);
}

exports.build      = build;
exports.makeJsFile = makeJsFile;
exports.style      = style;
exports.watch      = watch;