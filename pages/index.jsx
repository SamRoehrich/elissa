import { Grid, Link } from "@material-ui/core";
import Image from "next/image";

const HomePage = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      style={{ marginTop: 50 }}
    >
      <div style={{ paddingLeft: 400 }}>
        <Link href="/">
          <Image
            src="/work_link.svg"
            alt="EM Logo"
            width={600}
            height={100}
            style={{ paddingRight: 20 }}
          />
        </Link>
      </div>
      <div style={{ marginLeft: 1000 }}>
        <Link href="/">
          <Image
            src="/about_link 2.svg"
            alt="EM Logo"
            width={600}
            height={100}
            style={{ paddingLeft: 20 }}
          />
        </Link>
      </div>
      <div style={{ marginLeft: 400 }}>
        <Link href="/">
          <Image
            src="/resume_link 2.svg"
            alt="EM Logo"
            width={600}
            height={100}
          />
        </Link>
      </div>
      <div style={{ marginLeft: 1000 }}>
        <Link href="/">
          <Image
            src="/contact_link.svg"
            alt="EM Logo"
            width={600}
            height={100}
          />
        </Link>
      </div>
    </Grid>
  );
};
export default HomePage;
