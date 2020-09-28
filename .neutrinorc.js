const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const reactLint = require('@mozilla-frontend-infra/react-lint');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    reactLint({
      plugins: ['react-hooks'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-props-no-spreading': 'off',
      },
    }),
    react({
      html: {
        favicon: 'src/images/faviconLogo.png',
        template: 'src/index.html',
      }
    }),
  ],
};
