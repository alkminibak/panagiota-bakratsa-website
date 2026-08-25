import ApproachPreview from "../components/ApproachPreview";
import BiographyPreview from "../components/BiographyPreview";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <BiographyPreview />
      <ApproachPreview />
      <ServicesPreview />
      <Faq />
    </>
  );
};

export default Home;
