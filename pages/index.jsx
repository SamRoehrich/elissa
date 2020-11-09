import { Container, Grid, Link } from "@material-ui/core";
import Image from "next/image";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Elissa Moss: Home";
  });
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Link href="/projects">
        <Image src="/work_link.svg" alt="EM Logo" width={600} height={100} />
      </Link>
      <Link href="/about">
        <Image src="/about_link 2.svg" alt="EM Logo" width={600} height={100} />
      </Link>
      <Link href="/">
        <Image
          src="/resume_link 2.svg"
          alt="EM Logo"
          width={600}
          height={100}
        />
      </Link>
      <Link href="/contact">
        <Image src="/contact_link.svg" alt="EM Logo" width={600} height={100} />
      </Link>
    </Grid>
  );
};
export default HomePage;
