const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    {
      plugins: ['react-hooks'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      html: {
        favicon: 'src/images/faviconLogo.png',
        template: 'src/index.html',
      }
    },
  ],
};
