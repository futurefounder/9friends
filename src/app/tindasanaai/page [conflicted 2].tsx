"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TindasaAI() {
  const imgWidthSize = 300;
  const imgHeightSize = 300;

  const [stage, setStage] = useState(0);
  const [selections, setSelections] = useState({
    theme: "",
    style: "",
    level: "",
  });

  const proceedToNextStage = () => {
    setStage((prevStage) => prevStage + 1);
  };

  const goBack = () => {
    setStage((prevStage) => (prevStage > 0 ? prevStage - 1 : prevStage));
  };

  const startAgain = () => {
    setStage(0);
  };

  const setSelection = (category, selection) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [category]: selection,
    }));
  };

  switch (stage) {
    case 0:
      return (
        <div>
          <div className="text-center">
            <Image
              src="/images/person-meditating.svg"
              width={imgWidthSize}
              height={imgHeightSize}
              alt="Person meditating"
              className="rounded-full"
              priority={false}
            />{" "}
            <br />
            <span className="text-xl font-base">
              {" "}
              Start by clicking 💚
            </span>{" "}
          </div>{" "}
          <br />
          <button
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={proceedToNextStage}
          >
            Next
          </button>
        </div>
      );
    case 1:
      return (
        <div>
          {" "}
          Theme selection
          <br />
          <button
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={goBack}
          >
            Back
          </button>
          <button
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={proceedToNextStage}
          >
            Next
          </button>{" "}
        </div>
      );
    case 2:
      return (
        <div>
          {" "}
          Style selection <br />
          <button
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={goBack}
          >
            Back
          </button>
          <button
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={proceedToNextStage}
          >
            Next
          </button>
        </div>
      );
    case 3:
      // Replace this with your level selection code
      return (
        <div>
          {" "}
          Level selection
          <br />
          <button
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={goBack}
          >
            Back
          </button>
          <button
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={proceedToNextStage}
          >
            Next
          </button>
        </div>
      );
    case 4:
      return (
        <div>
          {" "}
          Result <br />
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={startAgain}
          >
            Start Again
          </button>{" "}
        </div>
      );
    default:
      return null;
  }
}
