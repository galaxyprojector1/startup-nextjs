import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import { cta, brand } from "@/content/inverse";

export const metadata: Metadata = {
  title: `${brand.name} — Contact`,
  description:
    "Request a strategic consultation. What you say, how you say it, and who hears it determines what happens next.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact" description={cta.paragraph} />

      <Contact />
    </>
  );
};

export default ContactPage;
