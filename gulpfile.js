const gulp       = require("gulp");
const sass       = require("gulp-sass");
const cleanCSS   = require("gulp-clean-css");
const browerSync = require("browser-sync");
const concat     = require("gulp-concat");

// function style(){
//   return gulp.src("./src/**/*.scss")
//     .pipe(sass())
//     .pipe(concat('style.css'))
//     .pipe(gulp.dest('./app/css'));
// }

// function build(){
//   return gulp.src("./src/**/*.scss")
//     .pipe(sass())
//     .pipe(concat('style.css'))
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('./app/css'));
// }

// function watch(){
//   browerSync.init({
//     server: {
//       baseDir : "./app"
//     }
//   });
//   gulp.watch("./src/**/*.scss", style);
//   gulp.watch("./app/").on("change", browerSync.reload);
// }

// exports.build = build;
// exports.style = style;
// exports.watch = watch;