import Navigation from "../components/Nav";
import Footer from "../components/Footer";
export default function Sessions() {
  return (
    <div>
      <Navigation />
      <iframe
        src="https://9friends.super.site/"
        className="w-full h-screen p-0 border-0"
      ></iframe>

      <Footer />
    </div>
  );
}
