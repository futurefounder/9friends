import Link from "next/link";
import Image from "next/image";
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
            <Image
              width={1260}
              height={750}
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src="/images/small_group_yoga.jpg"
              alt="Small group doing yoga"
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
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block"></span> Hi, I&apos;m Jesse
          </h2>

          <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
            I am Jesse, a passionate yogi and movement enthusiast. <br />
            From my early days of football and `&quot;aggressive`&quot; inline
            skating as a teenager to over 10 years as a professional
            breakdancer, movement has always been an integral part of my life.{" "}
            <br /> <br /> I discovered Yoga for myself in 2015, but it was in
            during transformative yoga classes on a beach in Fuerteventura in
            2021 that I discovered the profound connection between physical
            postures, meditation, and spirituality. Since then, my yoga journey
            has unfolded into a deep and diverse exploration, extending beyond
            the physical benefits I initially sought. <br /> <br /> Seeking
            further knowledge, I delved into yoga philosophy and embarked on a
            transformative trip to India, where I completed a 200-hour Yoga
            Teacher Training in Rishikesh. <br />
            <br />
            <Image
              width={1260}
              height={750}
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src="/images/ceremony-jesse.jpg"
              alt="Jesse at ceremony"
            />{" "}
            <br />
            I believe in the power of small group settings, as they foster a
            sense of connection and community. This belief inspired me to create
            9Friends, a space where we can come together, practice yoga, and
            support each other on our individual journeys of self-discovery and
            growth. <br />
            <br /> Join me on the mat as we cultivate strength, flexibility, and
            inner peace through mindfulness, movement, breathwork, and
            meditation. <br />
            <br /> Let&apos;s embark on a yogic journey together, creating a
            space where mind, body, and spirit can harmoniously unite! <br />
            <br />
            <span className="italic">
              {" "}
              P.S. <br />I wrote a more detailed version of my sports background
              on my <br />
              <a className="underline" href="https://jessekhala.com/sports/">
                personal website.
              </a>
            </span>
          </p>
        </div>
      </div>

      <br />
      <Footer />
    </div>
  );
}
