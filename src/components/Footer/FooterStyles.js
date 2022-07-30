const styles = (theme) =>
{
  const { breakpoints } = theme;

  return {
    footer: {
      ...theme.flexCenter,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      width: '100%',
      padding: '32px',
    },

    container: {
      width: '100%',
      maxWidth: theme.maxContentWidth,
    },

    leftFooter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      [breakpoints.down('xs')]: {
        ...theme.flexCenter,
      },
    },

    buttonContent: {
      display: 'flex',
    },

    icon: {
      marginRight: '8px',
      display: 'flex',
      alignItems: 'center',
    },

    iconImg: {
      width: '20px',
      height: '20px',
      margin: '0px 2px',
      backgroundColor: 'white',
      borderRadius: '4px',
    },

    rightFooter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'column',
      [breakpoints.down('xs')]: {
        marginTop: '16px',
        alignItems: 'center',
      },
    },

    link: {
      '&:hover': {
        '& $underline': {
          width: '100%',
        },
      },
    },

    underline: {
      width: '0%',
      height: '1px',
      backgroundColor: theme.palette.primary.contrastText,
      transition: 'width .5s',
    },
  };
};

export default styles;
