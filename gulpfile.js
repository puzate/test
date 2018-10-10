var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		prefixer = require('gulp-autoprefixer');
gulp.task('sass', function() {
	return gulp.src("app/sass/*.sass")
	.pipe(sass())
	.pipe(gulp.dest("app/css"))
	.pipe(browserSync.reload({stream: true}))
});
gulp.task("browserSync", function() {
	browserSync({
		server: {
			baseDir: "app"
		},
		notify: false
	});
});
gulp.task("prefixer", function() {
	gulp.src("app/css/main.css")
	.pipe(prefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe(gulp.dest("dist/css"))
});
gulp.task("watch", ["browserSync", "sass", "prefixer"], function() {
	gulp.watch("app/sass/*.sass", ["sass"]);
	gulp.watch("app/*.html", browserSync.reload);
	gulp.watch("app/js/*.js");
});