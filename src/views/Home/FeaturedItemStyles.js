const styles = (theme) =>
{
  return ({
    featuredItem: {
      display: 'inline-block',
      width: '100%',
      minHeight: '280px',
      '&:hover': {
        '& $featuredTitleUnderline': {
          width: '100%',
        },
      },
    },
    featuredItemTopLiner: {
      backgroundColor: theme.palette.secondary.main,
      height: '8px',
      marginBottom: '10px'
    },
    featuredContent: {
      padding: '16px 32px 16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    },
    featuredIcon: {
      width: '64px', height: '64px'
    },
    featuredTitle: {
      margin : '16px 0px 16px 0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    featuredTitleUnderline: {
      backgroundColor: theme.palette.secondary.main,
      width: '0%',
      height: '3px',
      transition: 'width .5s',
    },
  });
}

export default styles;
