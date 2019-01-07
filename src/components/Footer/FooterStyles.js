const styles = (theme) =>
{
  const { breakpoints } = theme;

  return({
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '32px'
    },
    container: {
      width: '100%',
      maxWidth: '1350px',
    },
    leftFooter: {
      [breakpoints.down('xs')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
      }
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
    }
  });
};

export default styles;
