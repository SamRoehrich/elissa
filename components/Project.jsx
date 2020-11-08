import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";

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
    width: "40%",
    marginTop: 200,
  },
}));

const Project = ({ item, key }) => {
  const classes = useStyles();
  console.log(item);
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
        <Grid item container style={{ marginLeft: 1000 }}>
          {item.photos.map((photo) => (
            <Image
              src={photo.location}
              alt="Niad"
              width={photo.width}
              height={photo.height}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Project;
