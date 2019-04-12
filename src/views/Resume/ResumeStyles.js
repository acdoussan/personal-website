const styles = (theme) =>
{
  const { breakpoints } = theme;

  return ({
    resume: {
      ...theme.flexCenter,
      width: '100%',
      height: `calc(100vh - ${theme.headerHeight})`,
    },

    paper: {
      padding: '25px',

      [breakpoints.up("md")]: {
        padding: '50px',
      },

    },

    icon: {
      color: '#fac533',
      backgroundColor: 'black',
      width: '30px',
      height: '30px',

      [breakpoints.up("sm")]: {
        width: '50px',
        height: '50px',
      },

      [breakpoints.up("md")]: {
        width: '75px',
        height: '75px',
      },
    },

    header: {
      ...theme.flexCenter,
      fontSize: '20px',

      [breakpoints.up("sm")]: {
        fontSize: '26px',
      },

      [breakpoints.up("md")]: {
        fontSize: '32px',
      },
    },

    title: {
      padding: '0px 20px',
    },

    text: {
      ...theme.flexCenter,
      padding: '10px 0px 0px 0px',
    },
  });
}

export default styles;
