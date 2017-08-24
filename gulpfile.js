var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");

gulp.task('buildDebug', ['bundleLibraries']);

gulp.task('buildRelease', ['uglify']);

gulp.task('bundleLibraries', ['compile'], function(){
    return browserify('src/sk/vcicmanec/debatepairer/Main.js')
        .bundle()
        .pipe(source('debatepairer.js'))
        .pipe(buffer())
        .pipe(gulp.dest('out/assets/js/'))
});

gulp.task('compile', function () {
    var tsProject = ts.createProject("tsconfig.json");

    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("src/sk/vcicmanec/"));
});

gulp.task('uglify', ['bundleLibraries'], function () {
    gulp.src('out/assets/js/debatepairer.js')
        .pipe(uglify())
        .pipe(gulp.dest('out/assets/js/'));
})






