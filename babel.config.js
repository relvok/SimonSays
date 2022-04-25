module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
};
