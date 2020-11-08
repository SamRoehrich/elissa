const { AppBar, makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
  footer: {
    marginTop: "1rem",
    padding: "1rem",
    position: "abosolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>footer</p>
    </footer>
  );
};
export default Footer;
