import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "20%",
  },
  appBar: {
    backgroundColor: "#f2d0d0",
  },
  toolbar: {
    backgroundColor: "#025949",
    justifyContent: "center",
  },
  buttons: {
    color: "#025949",
    fontSize: "28px",
    textTransform: "none",
  },
  text: {
    color: "#f27777",
    fontWeight: 400,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid item xs={8}>
            <Link href="/">
              <Image
                src="/Logo_transparent_site2.svg"
                alt="EM Logo"
                width={500}
                height={200}
              />
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/about">
              <Button className={classes.buttons}> about</Button>
            </Link>
            <Link href="/projects">
              <Button className={classes.buttons}>projects</Button>
            </Link>
            <Link href="/contact">
              <Button className={classes.buttons}>contact</Button>
            </Link>
            <Link href="/resume">
              <Button className={classes.buttons}>resume</Button>
            </Link>
          </Grid>
        </Toolbar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h2" className={classes.text}>
            digital design, illustration, & graphics
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default Header;
