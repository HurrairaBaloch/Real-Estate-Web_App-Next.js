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
    <div className="relative bg-gray-white w-full  flex flex-col items-center justify-start">
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
      <Footer />
    </div>
  );
};

export default LandingPage;
