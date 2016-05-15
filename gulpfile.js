//sass       - плагин для сборки scss.

//imagemin   - Плагин для сжатия изображений

//concat     - склеиваем js файлы в один
//ngAnnotate - проставляем ag зависимости
//uglify     - минификация в одну строку

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    imagemin    = require('gulp-imagemin'),

    concat      = require('gulp-concat'),
    ngAnnotate  = require('gulp-ng-annotate'),
    uglify      = require('gulp-uglify');


gulp.task('sass', function () {
    return gulp.src('./app/assets/scss/style.scss')
        // Если не передовать объект
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./app/build/css'))
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/assets/scss/style.scss', ['sass']);
});

gulp.task('compression-img', function(){
    gulp.src('./app/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/build/images'))
});

gulp.task('build-js', function() {
    return gulp.src(['./app/**/*.js', '!./app/build/js/*.js'])
        .pipe(concat('script.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./app/build/js'));
});

