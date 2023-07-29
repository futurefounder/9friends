"use client";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";
import MyModal from "./MyModal";

export default function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 h-18 border-b border-gray-200 bg-white/50 backdrop-blur dark:bg-gray-100">
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" />
      </Head>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link href="/" className="flex items-center" passHref>
          {/* In case logo image needed <img
        src="#"
        className="h-8 mr-3"
        alt="Logo"
      /> */}
          <span className="self-center text-xl whitespace-nowrap dark:text-white">
            <span className="font-bold text-purple-500">/</span>{" "}
            <span className="font-semibold text-stone-950">9FRIENDS</span>
          </span>
        </Link>{" "}
        <div className="flex md:order-2">
          <MyModal />
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={navbarOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } w-full md:block md:w-auto ${
            navbarOpen ? "bg-white/95 backdrop-blur mt-2" : ""
          }`}
          id="navbar-default"
        >
          {/* Navigation Elements */}
          <ul className="flex flex-col p-4 mt-4 font-medium text-center border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-100 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={
                  pathname == "/"
                    ? "underline text-purple-600 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    : " block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Home{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                href="/about"
                className={
                  pathname == "/about"
                    ? "underline text-purple-600 block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    : " block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                About{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                href="/blog"
                className={
                  pathname == "/blog"
                    ? "underline text-purple-600 block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    : " block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Blog{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                href="/sessions"
                className={
                  pathname == "/sessions"
                    ? "underline text-purple-600 block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    : " block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Sessions{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                href="/contact"
                className={
                  pathname == "/contact"
                    ? "underline text-purple-600 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    : " block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Contact{" "}
              </Link>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>
    </nav>
  );
}
