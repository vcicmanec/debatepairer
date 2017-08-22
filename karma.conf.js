module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            'src/**/*.ts',
            'test/**/*.ts'
        ],
        exclude: [
        ],
        preprocessors: {
            "**/*.ts": ['karma-typescript']
        },
        reporters: ["progress", "karma-typescript"],
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'],
        singleRun: true,
        plugins:[
            "karma-typescript",
            "karma-jasmine",
            "karma-chrome-launcher"
        ],
        karmaTypescriptConfig:{
            compilerOptions:{
                "compilerOptions": {
                    "module": "amd",
                    "noImplicitAny": true,
                    "removeComments": true,
                    "preserveConstEnums": true,
                    "target": "es5",
                    "sourceMap": true,
                    "allowUnreachableCode": true
                },
                "include": [
                    "src/**/*.ts"
                ],
                "exclude": [
                    "node_modules",
                    "**/Main.ts",
                    "**/*.spec.ts"
                ]
            }
        }
    });
};