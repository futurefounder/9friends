"use client";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

export default function MyModal() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  return (
    <div>
      <Button
        onClick={() => props.setOpenModal("default")}
        className="mr-3 bg-slate-800 hover:bg-fuchsia-900"
      >
        {/* bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 */}
        Book Now
      </Button>
      <Modal
        size="lg"
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
        className="md:mt-[15%] md:ml-[33%] md:items-center md:justify-center"
      >
        <Modal.Header>
          <span className="m-4 text-2xl font-semibold"> Book Now </span>{" "}
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-center sm:gap-4">
            {" "}
            <div
              //   href="#"
              className="flex-grow relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-4 lg:p-4 max-w-[300px]"
            >
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
                  <dd className="text-xs text-gray-500">
                    Style: Hatha Vinyasa
                  </dd>
                </div>
              </dl>
              <div className="mt-4">
                <p className="max-w-[40ch] text-xs text-gray-500">
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
                  <span className="font-bold ">
                    &apos;&apos;Conscious Kiez&apos;&apos; in Friedrichshain
                  </span>
                  , a cozy haven where yoga comes alive in an intimate space,
                  warmly welcoming up to six souls on a transformative journey.{" "}
                  <br />
                  {/* </div> */}
                </p>
              </div>
              {/* <div className="flex items-center"> */}
              {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="w-6 stroke-fuchsia-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                  />
                </svg>{" "} */}
              {/* </div> */} <br />
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
                      <img
                        alt="ClassPass-Partner"
                        src="https://partners-new.classpass.com/hubfs/ClassPass/badges/ClassPass-CPpartner-white.png"
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
                  <dd className="text-xs text-gray-500">
                    Style: Hatha Vinyasa
                  </dd>
                </div>
              </dl>
              <div className="mt-4">
                <p className="max-w-[40ch] text-xs text-gray-500">
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
                  Seek solace in the tranquil ambiance of the{" "}
                  <span className="font-bold">
                    {" "}
                    Iyengar Yogastudio, Oranienstr. 163, in Kreuzberg{" "}
                  </span>
                  and immerse yourself in a space that warmly envelops up to 10
                  souls.
                  <br />
                  {/* </div> */}
                </p>
              </div>
              {/* <div className="flex items-center"> */}
              {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="w-6 stroke-fuchsia-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                  />
                </svg>{" "} */}
              {/* </div> */} <br />
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
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Close
          </Button>
        </Modal.Body>
      </Modal>{" "}
    </div>
  );
}
