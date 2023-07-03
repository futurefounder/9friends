"use client";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function MyModal() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={() => onOpenModal()}
        className="mr-3 bg-slate-800 hover:bg-fuchsia-900"
      >
        Book Now
      </Button>
      <Modal open={open} onClose={onCloseModal} center>
        {" "}
        <div className="flex flex-col items-center justify-center mt-6 sm:flex-row sm:justify-center sm:gap-4">
          {" "}
          <div
            //   href="#"
            className="flex-grow relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-4 max-w-[300px]"
          >
            {" "}
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-xs font-bold text-gray-900 sm:text-xl">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
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
                    <span className="ml-2 text-xs font-semibold text-gray-900 md:text-sm lg:text-sm">
                      Friedrichshain
                    </span>
                  </div>{" "}
                </h3>{" "}
                <Link href="https://classpass.com/studios/9friends-berlin">
                  {/* eslint-disable-next-line @next/next/no-img-element  */}
                  <img
                    alt="ClassPass-Partner"
                    src="https://partners-new.classpass.com/hubfs/ClassPass/badges/ClassPass-CPpartner-white.png"
                    width="140"
                  />
                </Link>
              </div>
            </div>{" "}
            <Link
              target="_blank"
              className="text-xs font-semibold md:text-xs lg:text-xs hover:text-fuchsia-800 text-fuchsia-600 "
              href="https://www.google.com/maps/dir//CONSCIOUS+KIEZ,+Petersburger+Platz,+Berlin/@52.5213364,13.4084965,13z/data=!3m2!4b1!5s0x47a84e32729fb783:0xa07d3be50504bf21!4m9!4m8!1m0!1m5!1m1!1s0x47a84fa601cd17d9:0x2f39514e9a0b452b!2m2!1d13.4496958!2d52.5212913!3e1?entry=ttu"
            >
              👉🏽 Get directions to Fhain{" "}
            </Link>
            <dl className="flex gap-4 mt-2 sm:gap-4">
              <div className="flex flex-col-reverse">
                {/* <dt className="text-sm font-medium text-gray-600 md:text-xs lg:text-xs">
                    Hatha Vinyasa
                  </dt> */}
                <dd className="text-xs text-gray-500">Style: Hatha Vinyasa</dd>
              </div>
            </dl>
            <div className="mt-4">
              <p className="max-w-[40ch] text-xs text-gray-500">
                Discover the magic of{" "}
                <span className="font-bold ">
                  &apos;&apos;Conscious Kiez&apos;&apos; in Friedrichshain
                </span>
                , a cozy haven where yoga comes alive in an intimate space,
                warmly welcoming up to six souls. <br />
                {/* </div> */}
              </p>
            </div>
            <br />
            <button
              type="button"
              className="px-4 py-2 mr-2 text-xs font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              data-cal-link="hi-jesse/9friends-yoga-fhain"
            >
              Book Fhain{" "}
            </button>
          </div>{" "}
          <div
            //   href="#"
            className="flex-grow relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-4 max-w-[300px]"
          >
            {" "}
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-xs font-bold text-gray-900 sm:text-xl">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
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
                    <span className="ml-2 text-xs font-semibold text-gray-900 md:text-sm lg:text-sm">
                      Kreuzberg
                    </span>
                  </div>{" "}
                  <Link href="https://classpass.com/studios/9friends-berlin">
                    {/* eslint-disable-next-line @next/next/no-img-element  */}
                    <img
Expand All
	@@ -80,204 +162,51 @@ export default function MyModal() {
                      width="140"
                    />
                  </Link>
                </h3>
              </div>
            </div>{" "}
            <Link
              target="_blank"
              className="text-xs font-semibold md:text-xs lg:text-xs hover:text-fuchsia-800 text-fuchsia-600 "
              href="https://www.google.com/maps/dir//Iyengar+Yogastudio+Berlin,+Oranienstra%C3%9Fe+163,+10969+Berlin/@52.5025244,13.3863662,14z/data=!3m1!5s0x47a84e32729fb783:0xa07d3be50504bf21!4m18!1m8!3m7!1s0x47a84e326d4fb363:0xdaf3f08c1aea866e!2sIyengar+Yogastudio+Berlin!8m2!3d52.5025238!4d13.4141036!15sChNpeWVuZ2FyIHlvZ2EgYmVybGlukgELeW9nYV9zdHVkaW_gAQA!16s%2Fg%2F1w2yyh1j!4m8!1m0!1m5!1m1!1s0x47a84e326d4fb363:0xdaf3f08c1aea866e!2m2!1d13.4141036!2d52.5025238!3e1?entry=ttu"
            >
              👉🏽 Get directions to Xberg{" "}
            </Link>
            <dl className="flex gap-4 mt-2 sm:gap-4">
              <div className="flex flex-col-reverse">
                {/* <dt className="text-sm font-medium text-gray-600 md:text-xs lg:text-xs">
                    Hatha Vinyasa
                  </dt> */}
                <dd className="text-xs text-gray-500">Style: Hatha Vinyasa</dd>
              </div>
            </dl>
            <div className="mt-4">
              <p className="max-w-[40ch] text-xs text-gray-500">
                Seek solace in the tranquil ambiance of the{" "}
                <span className="font-bold">
                  {" "}
                  Iyengar Yogastudio, Oranienstr. 163, in Kreuzberg{" "}
                </span>
                and immerse yourself in a space that warmly envelops up to 10
                souls.
                <br />
              </p>
            </div>
            <br />
            <button
              type="button"
              className="px-4 py-2 mr-2 text-xs font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              data-cal-link="hi-jesse/9friends-yoga-xberg"
            >
              Book Xberg{" "}
            </button>
          </div>
        </div>{" "}
        <br />
        <Button color="gray" onClick={onCloseModal}>
          Close
        </Button>
      </Modal>
    </div>
  );
}