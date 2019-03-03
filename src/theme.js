import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffff72',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000000',
    },
  },

  typography: {
    useNextVariants: true,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  maxContentWidth: '1700px',
});

export default theme;
