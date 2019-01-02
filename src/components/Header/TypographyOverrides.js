const styles = (theme) => {
  const { breakpoints } = theme;

  return ({
    h5: {
      [breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
    },
    subtitle1: {
      [breakpoints.down("sm")]: {
        fontSize: ".9rem",
      },
    }
  });
}

export default styles;
