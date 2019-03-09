const styles = (theme) => {
  const { breakpoints } = theme;

  return ({
    aboutMe: {
      width: '100%',
    },

    entry: {
      ...theme.flexCenter,
      width: '100%',

      [breakpoints.up("sm")]: {
        height: '500px',
      },

      [breakpoints.up("md")]: {
        height: '450px',
      },
    },

    entryContent: {
      ...theme.flexCenter,
      width: '100%',
      height: '100%',
      maxWidth: theme.maxContentWidth,
    },

    entryPicDiv: {
      ...theme.flexCenter,
      height: '250px',

      [breakpoints.up("sm")]: {
        height: '100%',
      },
    },

    entryPic: {
      width: '200px',

      [breakpoints.up("md")]: {
        width: '250px',
      },
    },

    entryOuterTextWrapper: {
      ...theme.flexCenter,
      padding: '10px 30px',

      [breakpoints.up("sm")]: {
        height: '100%',
      },
    },

    entryInnerTextWrapper: {
      width: '100%',
      textAlign: 'justify',
    },

    entryHeader: {
      width: '100%',
      padding: '15px 30px 15px 15px',

      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },

    entryText: {
      width: '100%',
      padding: '15px 30px 15px 15px',
    },

    me: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(' + require('assets/img/bg-xs.jpg') + ')',

      [breakpoints.up("sm")]: {
        backgroundImage: 'url(' + require('assets/img/bg-sm.jpg') + ')',
      },

      [breakpoints.up("md")]: {
        backgroundImage: 'url(' + require('assets/img/bg-md.jpg') + ')',
      },
    },

    meEntryPicDiv: {
      backgroundColor: 'rgba(0,0,0,.5)',
    },

    meEntryPic: {
      borderRadius: '50%',
    },

    meEntryOuterTextWrapper: {
      backgroundColor: 'rgba(0,0,0,.5)',
    },

    meEntryHeader: {
      backgroundColor: 'transparent',
      color: 'white',
    },

    meEntryText: {
      backgroundColor: 'transparent',
      color: 'white',
    },

    meEntryLinkText: {
      color: 'white',
      fontWeight: 'bold',
    },

    career: {
      backgroundColor: theme.palette.primary.dark,
    },

    careerEntryText: {
      color: theme.palette.primary.contrastText,
    },
  });
};

export default styles;
