const styles = (theme) =>
{
  const { breakpoints } = theme;

  return ({
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
      [breakpoints.down('xs')]: {
        ...theme.flexCenter,
        flexDirection: 'column',
      },
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
  });
};

export default styles;
