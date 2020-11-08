import { Grid, makeStyles } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";

const useStyles = makeStyles({
  base: {
    width: "100%",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.base}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item>{children}</Grid>
      </Grid>
    </Grid>
  );
};
export default Layout;
