// Compile files gulp css
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done ) {
    src('src/scss/style.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )

    done();
}
exports.css = css;

// Watcher gulp dev
function dev() {
    watch( 'src/scss/**/*.scss', css );
}

exports.dev = dev;

// to run, gulp dev
