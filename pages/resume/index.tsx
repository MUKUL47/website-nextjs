import Navbar from "../../components/navbar";
import NavbarFooterWrapper from "../../components/wrappers/navbar-footer.wrapper";
export default function index() {
  return (
    <main>
      <NavbarFooterWrapper className="flex">
        <iframe
          src={"https://mukulishere.netlify.app/resume"}
          className="w-full"
        ></iframe>
      </NavbarFooterWrapper>
    </main>
  );
}
