import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Nav";
import Footer from "../components/Footer";

export default function Imprint() {
  return (
    <div>
      <Navigation />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block"></span> Imprint / Legal
              Notice
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              /9Friends <br />
              Responsible for Content: Jesse Khala <br />
              Schliemannstr. 44 <br />
              10437 Berlin <br /> hello@my9friends.com <br />
              <br />
              This Legal Notice complies with the German laws under § 5 TMG and
              § 55 RStV. <br />
              <br />
              <span className="font-bold"> Liability for Content</span> <br />
              <br />
              The contents of our website have been created with the greatest
              possible care. However, we cannot guarantee the contents&apos;
              accuracy, completeness, or topicality. According to Section 7,
              paragraph 1 of the TMG (Telemediengesetz - German Telemedia Act),
              we as service providers are liable for our content on these pages
              by general laws. However, according to Sections 8 to 10 of the
              TMG, we service providers are not obliged to monitor external
              information transmitted or stored or investigate circumstances
              pointing to illegal activity. Obligations to remove or block the
              use of information under general laws remain unaffected. However,
              a liability in this regard is only possible from the moment of
              knowledge of a specific infringement. Upon notification of such
              violations, we will remove the content immediately. <br /> <br />
              <span className="font-bold">Liability for Links </span> <br />
              <br />
              Our website contains links to external websites, over whose
              contents we have no control. Therefore, we cannot accept any
              liability for these external contents. The respective provider or
              operator of the websites is always responsible for the contents of
              the linked pages. The linked pages were checked for possible legal
              violations at the time of linking. Illegal contents were not
              identified at the time of linking. However, permanent monitoring
              of the contents of the linked pages is not reasonable without
              specific indications of a violation. Upon notification of
              violations, we will remove such links immediately. <br /> <br />
              <span className="font-bold">Copyright </span> <br />
              <br />© Photos{" "}
              <Link
                className="font-semibold text-purple-500"
                href="https://pexels.com"
              >
                {" "}
                Pexels.
              </Link>{" "}
              The contents and works on these pages created by the site operator
              are subject to German copyright law. The duplication, processing,
              distribution, and any kind of utilization outside the limits of
              copyright require the written consent of the respective author or
              creator. Downloads and copies of these pages are only permitted
              for private, non-commercial use. In so far as the contents on this
              site were not created by the operator, the copyrights of third
              parties are respected. In particular, third-party content is
              marked as such. Should you become aware of a copyright
              infringement, please inform us accordingly. Upon notification of
              violations, we will remove such contents immediately. <br />{" "}
              <span className="text-sm">
                <br /> Last Updated: 03.06.2023
                <br /> Created with the help of
                <Link
                  className="font-semibold text-purple-500"
                  href="https://e-recht24.de"
                >
                  {" "}
                  e-Recht24
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <br />
      <Footer />
    </div>
  );
}
