const styles = (theme) =>
{
  const { breakpoints } = theme;

  return ({
    h1: {
      fontSize: '4rem',
      [breakpoints.down('md')]: {
        fontSize: '3.5rem',
      },

      [breakpoints.down('sm')]: {
        fontSize: '3rem',
      },

      [breakpoints.down('xs')]: {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontSize: '3rem',
      [breakpoints.down('md')]: {
        fontSize: '2.5rem',
      },
      [breakpoints.down('sm')]: {
        fontSize: '2.25rem',
      },
      [breakpoints.down('xs')]: {
        fontSize: '1.75rem',
      },
    },
  });
};

export default styles;
