/*
 * Created with Sublime Text 2.
 * license: http://www.lovewebgames.com/jsmodule/index.html
 * User: 田想兵
 * Date: 2015-04-27
 * Time: 15:15:51
 * Contact: 55342775@qq.com
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    watchF = require('gulp-watch'),
    markdown = require('gulp-markdown');
var paths = {
    script: 'src/*.js',
    css: 'src/*.css',
    img:'src/*.png'
};
gulp.task('js', function() {
    return gulp.src(paths.script).pipe(uglify()).pipe(gulp.dest('dist'));
});
gulp.task('css', function() {
    return gulp.src(paths.css)
        .pipe(cssmin({
            compatibility: 'ie8'
        })) //兼容ie
        .pipe(gulp.dest('dist'))
});
gulp.task('img', function() {
    return gulp.src(paths.img)
        .pipe(gulp.dest('dist'))
});
gulp.task('watch',function(){
    watchF(['src/*.*','html/*.*'],function(){
        gulp.start('default')
    });
});
gulp.task('mk',function(){
        return gulp.src('README.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});
gulp.task('default', ['js', 'css','img']);