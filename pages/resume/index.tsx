import ContactMe from "../../components/contact-me";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
export default function index() {
  return (
    <main>
      <Navbar />
      <iframe
        src={"https://mukulishere.netlify.app/resume"}
        className="w-full h-screen"
      ></iframe>
      <ContactMe />
      <Footer />
    </main>
  );
}
