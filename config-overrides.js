const {injectBabelPlugin} = required('react-app-rewired');

const rootImportConfig = [
    "root-import",
    {
        rootPathPrefix: "~",
        rootPathSuffix: "src"
    }
];

module.export = config => injectBabelPlugin(rootImportConfig, config);