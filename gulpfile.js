var gulp = require('gulp');
var browserify = require('browserify');
var browserifyInc = require('browserify-incremental');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var xtend = require("xtend");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('buildDebug', ['bundleLibraries']);

gulp.task('buildRelease', ['uglify']);

gulp.task('bundleLibraries', ['compile'], function(){
    var b = browserify('src/sk/vcicmanec/debatepairer/Main.js', xtend(browserifyInc.args, {
        // your custom opts
    }))

    return browserifyInc(b, {cacheFile: 'browserify-cache.json'})
        .bundle()
        .pipe(source('debatepairer.js'))
        .pipe(buffer())
        .pipe(gulp.dest('out/assets/js/'))
});

gulp.task('compile', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("src/sk/vcicmanec/debatepairer"));
});

gulp.task('uglify', ['bundleLibraries'], function () {
    gulp.src('out/assets/js/debatepairer.js')
        .pipe(uglify())
        .pipe(gulp.dest('out/assets/js/'));
});


gulp.task('watch', ['compile'], function() {
    gulp.watch(
        [
        'src/sk/vcicmanec/**/*.ts',
        'src/sk/vcicmanec/**/*.tsx'
        ],
        ['bundleLibraries']);
});






