"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button, Modal } from "flowbite-react";

export default function DefaultNavbar() {
  // State for mobile Nav
  const [navbar, setNavbar] = useState(false);

  // Activelink in Nav
  const pathname = usePathname();

  // Modal
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  // Fetch and initialize Cal.com Calendar API
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white/50 backdrop-blur dark:bg-gray-100">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        {" "}
        <div className="flex md:order-2">
          <Button
            onClick={() => props.setOpenModal("dismissible")}
            className="bg-slate-800 hover:bg-fuchsia-900"
          >
            {/* bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 */}
            Book Now
          </Button>
          <Modal
            dismissible
            show={props.openModal === "dismissible"}
            size="lg"
            onClose={() => props.setOpenModal(undefined)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-1"
          >
            <Modal.Header className="items-center">
              <span className="m-8 font-semibold">
                {" "}
                Book Your Yoga Experience{" "}
              </span>{" "}
            </Modal.Header>
            <Modal.Body>
              <div className="m-16 ml-24 mr-24 space-y-6">
                <p className="text-base leading-relaxed text-center text-gray-500 dark:text-gray-400">
                  <button
                    type="button"
                    className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    data-cal-link="hi-jesse/9friends-yoga-xberg"
                  >
                    Book Xberg{" "}
                  </button>
                </p>
                <p className="text-base leading-relaxed text-center text-gray-500 dark:text-gray-400">
                  <button
                    type="button"
                    className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    data-cal-link="hi-jesse/9friends-yoga-fhain"
                  >
                    Book Fhain{" "}
                  </button>
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button onClick={() => props.setOpenModal(undefined)}>
        I accept
      </Button> */}
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <nav className="w-full bg-gray-200 shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link href="/" className="flex items-center" passHref>
                  {/* In case logo image needed <img
        src="#"
        className="h-8 mr-3"
        alt="Logo"
      /> */}
                  <span className="self-center text-xl whitespace-nowrap dark:text-white">
                    <span className="font-bold text-purple-500">/</span>{" "}
                    <span className="font-semibold text-stone-950">
                      9FRIENDS
                    </span>
                  </span>
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 rounded-md outline-none text-slate-800 focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-slate-800">
                    <Link
                      href="/"
                      className={
                        pathname == "/"
                          ? "underline text-purple-600 block font-medium py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                          : " block py-2 pl-3 pr-4 text-gray-900 font-medium  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      }
                    >
                      Home
                    </Link>
                  </li>

                  <li className="text-slate-800">
                    <Link
                      href="/about"
                      className={
                        pathname == "/about"
                          ? "underline text-purple-600 block font-medium  py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                          : " block py-2 pl-3 pr-4 text-gray-900 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      }
                    >
                      About
                    </Link>
                  </li>
                  <li className="text-slate-800">
                    <Link
                      href="/contact"
                      className={
                        pathname == "/contact"
                          ? "underline text-purple-600 block py-2 pl-3 pr-4 font-medium  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                          : " block py-2 pl-3 pr-4 text-gray-900 font-medium  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      }
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}
