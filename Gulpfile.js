var gulp = require('gulp'),
 sass = require('gulp-sass'),
 concat = require('gulp-concat'),
 sourcemaps = require('gulp-sourcemaps'),
 autoprefixer = require('gulp-autoprefixer'),
 gulpSequence = require('gulp-sequence'),
 uglify = require('gulp-uglify'),
 babel = require('gulp-babel'),
 watch = require('gulp-watch'),
 batch = require('gulp-batch'),
 rename = require("gulp-rename");

gulp.task('default', function() {
});

gulp.task('sass', function () {
	return gulp.src('./scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(sourcemaps.write('css'))
		.pipe(gulp.dest('css'));
});

gulp.task('autoprefixer', function(){
	gulp.src('css/style.css')
			.pipe(autoprefixer({
					browsers: ['last 2 versions'],
					cascade: false
			}))
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest('css'))
});

gulp.task('compress', function() {
	return gulp.src('scripts/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify({
			outSourceMap: true
		}))
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('./js/'));
});

gulp.task('watch', function(){
	watch('scripts/**/*.js', batch(function (events, done) {
				gulp.start('compress', done);
		}));
		watch('scss/**/*.scss', batch(function (events, done) {
				gulp.start('sass', done);
		}));
		watch('css/style.css', batch(function(events, done) {
				gulp.start('autoprefixer', done);
		}))
});
