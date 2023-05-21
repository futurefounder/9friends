import Link from "next/link";
import Navigation from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Navigation />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block"></span> Experience the Joy
              of Yoga in Small, Supportive Classes
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Join 9Friends and embark on a transformative yoga journey in our
              intimate group sessions.
            </p>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src="https://images.pexels.com/photos/3822091/pexels-photo-3822091.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
            Welcome to 9Friends, where big smiles and small groups create the
            perfect recipe for yoga bliss. Dive into our intimate sessions and
            unlock your inner radiance.
            <br />
            <br />
            With personalized guidance, uplifting vibes, and a sprinkle of
            magic, we&prime;ll elevate your practice to new heights. Embrace the
            joy of being part of our vibrant little group ✨
          </p>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
