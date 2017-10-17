const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();

const SRCS = [
  'bgg.js',
  'index.js',
  'storage.js',
  'xmlrpc.js',
];

gulp.task('default', () =>
    gulp.src(SRCS)
          .pipe(closureCompiler({
            compilation_level: 'ADVANCED',
            warning_level: 'VERBOSE',
            language_in: 'ECMASCRIPT6_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            output_wrapper: '(function(){\n%output%\n}).call(this)',
            js_output_file: 'index-transpiled.js'}))
          .pipe(gulp.dest('.')));
