const styles = (theme) =>
{
  const { breakpoints } = theme;

  return ({
    home: {
      width: '100%',
    },
    pictureDiv: {
      maxHeight: '600px',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    picture: {
      width: '100%',
    },
    image: {
      width: '100%',
      minHeight: '250px',
    },
    overlay: {
      position: 'absolute',
      top: '20%',
      left: '15%',
      [breakpoints.down("md")]: {
        left: '10%',
      },
      [breakpoints.down("sm")]: {
        left: '7.5%',
      },
      [breakpoints.down("xs")]: {
        left: '5%',
      }
    },
    primaryBackground: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      padding: '6px',
    },
    secondaryBackground: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      padding: '6px',
      float: 'left',
    },
    featured: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      backgroundColor: 'white',
      padding: '16px 16px 32px 16px',
    },
    featuredHeader: {
      width: '100%',
      textAlign: 'center',
      margin: '48px 0px 64px 0px',
      [breakpoints.down("md")]: {
        margin: '32px 0px 48px 0px',
      },
      [breakpoints.down("sm")]: {
        margin: '16px 0px 32px 0px',
      },
    },
    featuredGrid: {
      maxWidth: '1350px',
    },
    featuredElem: {
      display: 'inline-block',
      width: '100%',
      minHeight: '280px',
      '&:hover': {
        '& $featuredTitleUnderline': {
          width: '100%',
        },
      },
    },
    featuredElemTopLiner: {
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
  })
};

export default styles;
