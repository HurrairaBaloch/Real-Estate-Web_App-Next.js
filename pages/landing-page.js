import Header from "../components/header";
import Hero from "../components/hero";
import AreasContainer from "../components/areas-container";
import AreaFeatureCard from "../components/area-feature-card";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
      <Header
        hamburger={false}
        topContainerAlignSelf="unset"
        logoFlex="unset"
        logoWidth="1760px"
      />
      <Hero />
      <AreasContainer />
      <AreaFeatureCard />
      <RentPropertiesContainer />
      <RentPropertiesForm />
      <Contact />
      <Footer
        imageIds="/houseline2.svg"
        smallImageIds="/social-media-logo5.svg"
        mediumImageIds="/social-media-logo6.svg"
        smallImageIds2="/social-media-logo7.svg"
        smallImageIds3="/social-media-logo8.svg"
        largeImageIds="/social-media-logo9.svg"
        propOverflow="unset"
      />
    </div>
  );
};

export default LandingPage;
