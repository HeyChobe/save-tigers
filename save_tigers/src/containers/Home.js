import React from "react";
import CoverPage from "../components/CoverPage";
import CoverPage1 from "../components/CoverPage1";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

function Home() {
  return (
    <React.Fragment>
      <CoverPage />
      <Section1  />
      <CoverPage1 />
      <Section2 />
    </React.Fragment>
  );
}

export default Home;
