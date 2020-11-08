import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Elissa Moss: About";
  });
  return <p>about Page</p>;
};
export default AboutPage;
