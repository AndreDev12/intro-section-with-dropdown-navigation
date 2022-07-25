const { src, dest, watch, series } = require('gulp');

// CSS and SASS
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// JS
const terser = require('gulp-terser-js');

// Images
const webp = require('gulp-webp');

function buildStyles() {
    return src('src/scss/app.scss')
			.pipe(sourcemaps.init())
        	.pipe(sass().on('error', sass.logError))
        	.pipe(postcss([autoprefixer(),cssnano()]))
			.pipe(sourcemaps.write('.'))
        	.pipe(dest('build/css'))
};

function buildScripts(){
    return src('src/js/*.js')
        	.pipe(sourcemaps.init())
        	.pipe(terser())
        	.pipe(sourcemaps.write('.'))
        	.pipe(dest('build/js'));
}

function images(){
    return src('src/assets/images/*')
            .pipe(dest('build/img'))
}

function versionWebp(){
	return src('src/assets/images/*.png')
			.pipe(webp({quality: 50}))
			.pipe(dest('build/img'))
}

function dev() {
    watch('src/scss/**/*.scss', buildStyles);
	watch('src/js/*.js', buildScripts);
    watch('src/assets/images/*', images);
};

exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.dev = dev;
exports.images = images;
exports.versionWebp = versionWebp;
exports.default = series(images, versionWebp, buildStyles, buildScripts, dev);