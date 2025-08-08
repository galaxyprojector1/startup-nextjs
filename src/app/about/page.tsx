import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import { brand, leadership, why } from "@/content/inverse";

export const metadata: Metadata = {
  title: `${brand.name} — About` ,
  description:
    "We help leaders architect brands that move markets, shape perception, and deepen trust — with clarity, resonance, and narrative control.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description={why.paragraph}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
