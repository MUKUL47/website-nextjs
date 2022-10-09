import type { NextPage } from "next";
import MyIntro from "../components/my-intro";
import Navbar from "../components/navbar";
import bg from "../assets/aa.webp";
import Image from "next/image";
import AboutMe from "../components/about-me";
import MyProjects from "../components/my-projects";
import ContactMe from "../components/contact-me";
import Footer from "../components/footer";
const Home: NextPage = () => {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <MyIntro />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </main>
  );
};

export default Home;
