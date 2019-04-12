const styles = (theme) => {
  const { breakpoints } = theme;

  return ({
    header: {
      ...theme.flexCenter,
      height: theme.headerHeight,
      width: '100%',
    },

    contentLimit: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      maxWidth: theme.maxContentWidth,
    },

    logo: {
      display: 'flex',
      textDecoration: 'none',
      color: 'white',
      alignItems: 'center',
    },

    button: {
      textTransform: 'unset',
    },

    code: {
      width: '48px',
      height: '48px',
      marginRight: '16px',
      [breakpoints.down("sm")]: {
        width: '36px',
        height: '36px',
        marginRight: '10px',
      },
    },

    grow: {
      flexGrow: 1,
    },

    menuButton: {
      color: 'white',
    },
  });
};

export default styles;
