"use client";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
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
    <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white/50 backdrop-blur dark:bg-gray-100">
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
        {/* console.log(href); */}
        <div className="flex md:order-2">
          {" "}
          <button
            type="button"
            className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            data-cal-link="hi-jesse/9friends-yoga-fhain"
          >
            Book Now{" "}
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          {/* Navigation Elements */}
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-100 dark:border-gray-700">
            <li>
              {" "}
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
            {/* <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Services
          </a>
        </li> */}
            <li>
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
