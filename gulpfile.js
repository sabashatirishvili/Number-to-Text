const {src, dest, series, watch} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function styles() {
	return src('./src/styles/**/*.css')
		.pipe(autoprefixer("last 2 versions"))
		.pipe(cleancss())
		.pipe(dest('./dest/styles'))
}

function scripts() {
	return src('./src/js/**/*.js')
		.pipe(uglify())
		.pipe(dest('./dest/js'))
}

function browserSyncServe(cb) {
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});
	cb();
}

function browserSyncReload(cb) {
	browserSync.reload();
	cb();
}

function watchTask() {
		watch('*.html', browserSyncReload);
  	watch(['./src/styles/**/*.css', './src/js/**/*.js'], series(styles, scripts, browserSyncReload));
}

exports.default = series(styles, scripts, browserSyncServe, watchTask);