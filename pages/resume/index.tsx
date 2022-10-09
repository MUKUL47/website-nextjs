import Navbar from "../../components/navbar";
export default function index() {
  return (
    <main>
      <Navbar />
      <iframe
        src={"https://mukulishere.netlify.app/resume"}
        className="h-screen w-full"
      ></iframe>
    </main>
  );
}
