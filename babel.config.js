module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@assets": './src/assets',
            "@components": './src/components',
            "@hooks": './src/hooks',
            "@constants": './src/constants',
            "@store": './src/store',
            "@pages": './src/pages',
            "@routes": './src/routes',
            "@services": './src/services',
            "@app": './src/app',
            "@actions": './src/actions',
          },
        },
      ],
    ],
  };
};
