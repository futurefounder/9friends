import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Nav";
import Footer from "../components/Footer";
import Posts from "../components/Posts";

export default function Blog() {
  return (
    <div>
      <Navigation />
      <Posts />
      <Footer />
    </div>
  );
}
