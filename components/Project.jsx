import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#022e40",
  },
  iamgeContainer: {
    height: "25%",
    width: "100%",
    backgroundColor: "white",
  },
  content: {
    marginLeft: 50,
    width: "50%",
    marginTop: 200,
  },
}));

const Project = ({ item, key }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      className={classes.container}
      alignItems="center"
    >
      <Grid container direction="row" alignItems="center">
        <Grid
          item
          container
          direction="column"
          alignItems="flex-start"
          justify="center"
          className={classes.content}
        >
          <Typography variant="h1" style={{ color: "#f27777" }}>
            {item.name}
          </Typography>
          <Typography variant="body1" style={{ color: "#f27777" }}>
            {item.description}
          </Typography>
        </Grid>
        <Grid item container style={{ marginLeft: 1400 }}>
          {item.photos.map((photo) => {
            <img src={photo} alt={photo}></img>;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Project;
