import { Grid, makeStyles } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";

const useStyles = makeStyles({
  base: {
    width: "100%",
  },
  footer: {
    marginTop: "1rem",
    padding: "1rem",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    flexShrink: 0,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      className={classes.base}
      justify="center"
    >
      <Grid item>
        <Header />
      </Grid>
      <Grid item container justify="center">
        <Grid item>{children}</Grid>
      </Grid>
      <Grid item className={classes.footer}>
        <footer>Copyright Elissa Moss, 2020</footer>
      </Grid>
    </Grid>
  );
};
export default Layout;
