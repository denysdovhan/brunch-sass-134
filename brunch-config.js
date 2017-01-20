module.exports = {
  files: {
    stylesheets: {
      joinTo: 'app.css',
    },
  },
  plugins: {
    sass: {
      // mode: 'native', // does not work without, or with 'ruby'
      options: {
        includePaths: ['node_modules/normalize-scss/sass'],
      },
    },
  },
};
