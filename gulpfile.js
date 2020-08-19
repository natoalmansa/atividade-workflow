var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-minify-css");
var htmlmin = require("gulp-htmlmin");

gulp.task("compilar-css", function(){
    return gulp.src("./source/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("minifycss",function(){
	return gulp.src("./dist/css/*.css")
	.pipe(minifyCSS( { keepBreaks: true }))
	.pipe(gulp.dest("./dist/css"));
});

gulp.task("minify", () => {
	return gulp.src("./source/*.html")
	  .pipe(htmlmin({ collapseWhitespace: true }))
	  .pipe(gulp.dest("./dist"));
});


/*

gulp.task('background',function(){
	//gulp.watch("./source/index.html",["minify"]);
    gulp.watch("./source/scss/*.scss",["compilar_css"]);
});

*/