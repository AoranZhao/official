import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';
import path from 'path';

let location = {
    public: 'client',
    server: 'server'
}

gulp.task('dist:server', () => {
    return gulp.src(path.join(location.server, '*.js'))
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(gulp.dest(path.join(location.server, 'dist')))
})

gulp.task('dist:js', () => {
    return gulp.src(path.join(location.public, '/src/**/*.(js|jsx)'))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(path.join(location.public, 'dist')))
})

gulp.task('dist', gulp.parallel('dist:server', 'dist:js'));

gulp.task('watch:server', () => {
    return gulp.watch(path.join(location.server, '*.js'), gulp.series('dist:server'));
})

gulp.task('watch:js', () => {
    return gulp.watch(path.join(location.public, '/src/**/*.(js|jsx|css|scss)'), gulp.series('dist:js'));
})

gulp.task('watch', gulp.parallel('watch:server', 'watch:js'));

gulp.task('default', gulp.parallel('dist', 'watch'));
