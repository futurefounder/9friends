"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import Link from "next/link";
// import StickyBanner from "./StickyBanner";

const Hero = (params: any) => {
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
    <section className="">
      {/* <StickyBanner /> */}
      <div className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Book Your <span className="italic"> Small Group</span> <br />
              <span className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:animate-pulse md:text-5xl lg:text-6xl dark:text-white">
                Yoga Experience{" "}
              </span>
              {/* <div className="z-0 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 mt-6 duration-1000 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div> */}
            </h2>
            <p className="text-gray-500 md:mt-4 md:block">
              Get ready for an energizing and joyful experience! <br />
              <br />{" "}
              <span className="font-bold">
                {" "}
                🔥 1. & 3. wed. of the month -{" "}
                <Link
                  className="font-bold text-purple-500 underline hover:text-purple-700"
                  href="/posts/what-are-yoga-drills"
                >
                  {" "}
                  Yoga Drills
                </Link>
                :{" "}
              </span>
              Strengthening exercises for learning / mastering advanced yoga
              poses (Beginners welcome!). <br />
              <br />{" "}
              <span className="font-bold">
                {" "}
                🌸 2. & 4. wed. of the month - Chakra Flow:
              </span>{" "}
              A practice focused on balancing and activating the body&apos;s
              energy centers through specific poses and breathwork.
            </p>

            <div className="mt-4 md:mt-8 ">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span
                  data-cal-link="hi-jesse/9friends-yoga-fhain"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Book Now
                </span>
              </button>
              <br />
              <br />
              <div className="flex items-center justify-center">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://classpass.com/studios/9friends-berlin"
                >
                  <img
                    alt="ClassPass-Partner"
                    src="https://partners-new.classpass.com/hubfs/ClassPass/badges/ClassPass-CPpartner-white.png"
                    width="240"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://images.pexels.com/photos/8436746/pexels-photo-8436746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover w-full h-56 rounded sm:h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
