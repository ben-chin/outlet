import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack'; 

const ROOT = __dirname;
const APP = path.resolve(ROOT, 'front', 'j');
const ENTRIES = path.resolve(APP, 'entries');
const DIST = path.resolve(APP, 'dist');
const PUBLIC_PATH = '/j/dist/';

const loaders = [{
    test: /\.js/,
    include: [APP],
    loaders: ['babel'],
}];

function getEntries(isDev) {
    const entries = {
        main: path.resolve(ENTRIES, 'main'),
    };

    if (isDev) return hotReloadEntries(entries);
    return entries;
}

function hotReloadEntries(entries) {
    let hotEntries = {};
    Object.keys(entries).forEach((key) => {
        hotEntries[key] = [
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/dev-server',
            entries[key],
        ];
    });
    return hotEntries;
}

export const clientConfig = {

    context: APP,

    // Entry files
    entry: getEntries(true),

    // Output
    output: {
        filename: '[name].js',
        path: DIST,
        publicPath: PUBLIC_PATH,
    },

    module: {
        loaders,
    },

    plugins: [
        new HotModuleReplacementPlugin(),
    ],

    resolve: {
        root: [APP],
        extensions: ['', '.js'],
    },

}
