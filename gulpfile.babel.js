import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import { clientConfig } from './webpack.config.babel';

gulp.task('default', ['build:dev-server']);

gulp.task('build:dev-server', (callback) => {
    const compiler = webpack(clientConfig);
    const devServer = new WebpackDevServer(compiler, {
        publicPath: clientConfig.output.publicPath,
        hot: true,
        stats: { colors: true },
    });

    devServer.listen(8080, 'localhost', (err) => {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        gutil.log('webpack-dev-server');
    });
});

gulp.task('build:client', (callback) => {
    webpack(clientConfig, (err, stats) => {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log('webpack', stats.toString({ colors: true }));
        callback();
    });
});
