"use client";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

export default function BookingCards(params: any) {
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
    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-center sm:gap-4">
      {" "}
      <div
        //   href="#"
        className=" flex-grow relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 max-w-[300px]"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="blue"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </svg>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl ml-2">
                  Friedrichshain
                </h3>
              </div>{" "}
            </h3>
          </div>
        </div>{" "}
        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            {/* <div className="flex items-center"> */}
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-2"> Mondays 7.00PM - 8.00PM </span> */}
            Discover the magic of{" "}
            <span className="font-bold	 ">
              &apos;&apos;Conscious Kiez&apos;&apos; in Friedrichshain
            </span>
            , a cozy haven where yoga comes alive in an intimate space,
            exclusively welcoming up to six souls on a transformative journey.
            {/* </div> */}
          </p>
        </div>
        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Jesse</dt>
            <dd className="text-xs text-gray-500">Teacher</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Vinyasa Flow</dt>
            <dd className="text-xs text-gray-500">Style</dd>
          </div>
        </dl>{" "}
        <br />
        <button
          type="button"
          className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          data-cal-link="hi-jesse/9friends-yoga-fhain"
        >
          Book Fhain{" "}
        </button>
      </div>
      <a
        // href="#"
        className="flex-grow relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 max-w-[300px]"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="darkred"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </svg>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl ml-2">
                  Kreuzberg
                </h3>
              </div>{" "}
            </h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            {/* <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}
            {/* <span className="ml-2"> Wednesday 8.00PM - 9.00PM </span> */}
            {/* </div> */}
            Seek solace in the tranquil ambiance of the{" "}
            <span className="font-bold">
              {" "}
              &apos;&apos;Iyengar Yoga Studio&apos;&apos; in Kreuzberg{" "}
            </span>
            and immerse yourself in a space that warmly envelops up to 10 souls,
            nurturing deep connections.
          </p>
        </div>
        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Jesse</dt>
            <dd className="text-xs text-gray-500">Teacher</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Vinyasa Flow</dt>
            <dd className="text-xs text-gray-500">Style</dd>
          </div>
        </dl>{" "}
        <br />
        <button
          type="button"
          className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          data-cal-link="hi-jesse/9friends-yoga-xberg"
        >
          Book Xberg{" "}
        </button>
      </a>
    </div>
  );
}
