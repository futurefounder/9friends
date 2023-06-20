"use client";
import Link from "next/link";

import React, { useState } from "react";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="px-4 py-16 mx-auto text-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 ">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="232db96b-4aa2-422f-9086-5a77996d1df1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                {/* <rect
                  fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                  width="52"
                  height="24"
                /> */}
              </svg>
              <span className="relative">FAQ</span>
            </span>{" "}
          </h2>
          {/* <p class="text-base text-gray-700 md:text-lg ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p> */}
        </div>
        <div className="space-y-4 text-left">
          <Item title="What Yoga styles are offered in the class?">
            The classes are Hatha Vinyasa, meaning we will align body, breath
            and mind, and also stay a little longer in the postures.
          </Item>
          <Item title="Can I join the classes as a beginner?">
            Absolutely! The yoga classes are open to practitioners of all
            levels, including absolute beginners and experienced practitioners.
            Your will be guided through the poses and receive modifications to
            ensure a safe and enjoyable practice.
          </Item>
          <Item title="Where are your yoga classes held?">
            Our Friedrichshain Yoga classes are conducted at 📍
            <Link
              target="_blank"
              href="https://www.google.com/maps/dir//CONSCIOUS+KIEZ,+Petersburger+Platz,+Berlin/@52.5213364,13.4084965,13z/data=!3m2!4b1!5s0x47a84e32729fb783:0xa07d3be50504bf21!4m9!4m8!1m0!1m5!1m1!1s0x47a84fa601cd17d9:0x2f39514e9a0b452b!2m2!1d13.4496958!2d52.5212913!3e1?entry=ttu"
            >
              <span className="font-semibold underline">Conscious Kiez</span>
            </Link>{" "}
            (Google Link), a calm space located in Friedrichshain, Berlin.
            <br />
            <br />
            Our Kreuzberg Yoga classes are conducted at 📍
            <Link
              target="_blank"
              href="https://www.google.com/maps/dir//Iyengar+Yogastudio+Berlin,+Oranienstra%C3%9Fe+163,+10969+Berlin/@52.5025244,13.3863662,14z/data=!3m1!5s0x47a84e32729fb783:0xa07d3be50504bf21!4m18!1m8!3m7!1s0x47a84e326d4fb363:0xdaf3f08c1aea866e!2sIyengar+Yogastudio+Berlin!8m2!3d52.5025238!4d13.4141036!15sChNpeWVuZ2FyIHlvZ2EgYmVybGlukgELeW9nYV9zdHVkaW_gAQA!16s%2Fg%2F1w2yyh1j!4m8!1m0!1m5!1m1!1s0x47a84e326d4fb363:0xdaf3f08c1aea866e!2m2!1d13.4141036!2d52.5025238!3e1?entry=ttu"
            >
              <span className="font-semibold underline">
                Iyengar Yogastudio Berlin Kreuzberg
              </span>
            </Link>{" "}
            (Google Link), a calm space located in Friedrichshain, Berlin.
          </Item>
          <Item title="How much do the classes cost?">
            The classes are currently donation based. <br />
            <br /> I am working on getting Urban Sports Club approved, this
            might be available as of August 2023. <br />
            <br />
            If you find yourself facing financial challenges but still wish to
            join, please reach out to me at hello@my9friends.com with a little
            note, and we will work together to find a solution that allows you
            to be part of our community. Your well-being matters!😊
          </Item>
          <Item title="How do I book a class?">
            Classpass Members: Book via the Classpass App. <br /> Everyone else:
            Book via the book now button on this website 😊{" "}
          </Item>
          <Item title="My question is not answered, how can I contact you?">
            No problem 😊 just send a message through the{" "}
            <Link className="font-semibold text-purple-700" href="/contact">
              {" "}
              Contact Page{" "}
            </Link>{" "}
          </Item>
        </div>
      </div>
    </div>
  );
}
