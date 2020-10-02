import { responsiveFontSizes, createMuiTheme } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { THEME } from './constants';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: THEME.PRIMARY_DARK,
      },
      secondary: {
        main: THEME.SECONDARY,
      },
      text: {
        primary: THEME.PRIMARY_TEXT_DARK,
        secondary: THEME.SECONDARY_TEXT_DARK,
      },
    },
    typography: {
      fontSize: 16,
    },
    overrides: {
      MuiLink: {
        root: {
          color: THEME.PRIMARY_TEXT_DARK,
          textDecoration: 'none',
          borderBottom: `2px solid ${lighten(
            THEME.SECONDARY,
            THEME.TONAL_OFFSET
          )}`,
          '&:hover': {
            borderBottom: `2px solid ${THEME.SECONDARY}`,
          },
        },
        underlineHover: {
          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
  })
);

export default theme;
