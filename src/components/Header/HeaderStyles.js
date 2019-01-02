const styles = (theme) => {
  const { breakpoints } = theme;

  return ({
    header: {
      height: '75px',
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
