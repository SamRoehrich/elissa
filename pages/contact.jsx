import { Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
import Image from "next/image";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Elissa Moss: Contact";
  });
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-around"
      style={{ marginTop: 100, marginLeft: 200 }}
    >
      <div>
        <Image src="/left hand_forsite.svg" height={400} width={400} />
      </div>
      <Grid item>
        <Typography variant="h4">Email: elissamakes@gmail.com</Typography>
        <Typography variant="h4">Instagram @elissamakes</Typography>
        <Typography variant="h4">
          LinkedIn: https://www.linkedin.com/in/elissa-moss-37662b1b8/
        </Typography>
        <Typography variant="h4">Phone: 4692353843</Typography>
      </Grid>
    </Grid>
  );
};
export default ContactPage;
