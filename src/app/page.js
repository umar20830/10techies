import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Heading from "@/components/HeadingUnderCards/Heading";
import MainPageCards from "@/components/MainPageCards/MainPageCards";
import Navbar from "@/components/Navbar/Navbar";
import SmallNavbar from "@/components/Navbar/SmallNavbar";
import Partner from "@/components/PartnerShip/Partner";
import Services from "@/components/Services/Services";
import Work from "@/components/Work/Work";


export default function Home() {

  return (
    <>
      <Navbar />
      <SmallNavbar />
      <Banner />
      <MainPageCards />
      <Heading />
      <Services />
      <Partner />
      <Work />
      <Footer />
    </>
  );
}
