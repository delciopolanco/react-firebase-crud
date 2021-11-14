/* craco.config.js */
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ],
    },
  },
  webpack: {
    // alias: {
    //   '@': path.resolve(__dirname, 'src/'),
    //   '@components': path.resolve(__dirname, 'src/components'),
    //   '@containers': path.resolve(__dirname, 'src/containers'),
    //   '@pages': path.resolve(__dirname, 'src/pages'),
    //   '@services': path.resolve(__dirname, 'src/services'),
    //   '@store': path.resolve(__dirname, 'src/store'),
    //   '@enums': path.resolve(__dirname, 'src/enums'),
    //   '@hooks': path.resolve(__dirname, 'src/hooks')
    // }
  },
};
