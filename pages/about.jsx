import { Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
import Image from "next/image";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Elissa Moss: About";
  });
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-around"
      style={{ marginTop: 100 }}
    >
      <div style={{ width: "50%" }}>
        <Typography variant="h1" style={{ color: "#022e40" }}>
          About Me
        </Typography>
        <Typography variant="h5" style={{ color: "#022e40" }}>
          Bringing enthusiasm to  crafting beautiful digital graphic identities
          that are as unique as my clients since 2013. With a background in
          crafts and DIY, I infuse my ‘handmade’ aesthetic into logos, layouts,
          menus, packaging and more. Cohesive branding with a special emphasis
          on type and color are my specialties.
        </Typography>
      </div>
      <Image src="/bio_photo.jpg" height={625} width={500} />
    </Grid>
  );
};
export default AboutPage;
