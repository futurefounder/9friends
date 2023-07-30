"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TindasanaAIHeader from "../components/TindasanaAIHeader";
import Footer from "../components/Footer";

export default function TindasaAI() {
  const imgWidthSize = 150;
  const imgHeightSize = 150;

  const [isDone, setIsDone] = useState(false);

  const buttonNextStyle =
    "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

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

  function BackForwardButtons() {
    return (
      <>
        {" "}
        <div className="mt-4 mb-3 flex flex-row">
          <button
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={goBack}
          >
            Back
          </button>
          <button className={buttonNextStyle} onClick={proceedToNextStage}>
            Next
          </button>
        </div>
      </>
    );
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    0: {
      title: "Chakras",
      type: "Theme",
      image: "/images/chakras.png",
    },
    1: {
      title: "Seasons",
      type: "Theme",
      image: "/images/season.png",
    },
    2: {
      title: "Spirituality",
      type: "Theme",
      image: "/images/spirituality.png",
    },
    3: {
      title: "Moon Cycle",
      type: "Theme",
      image: "/images/moon.png",
    },
    4: {
      title: "Power",
      type: "Style",
      image: "/images/power.png",
    },
    5: {
      title: "Hatha",
      type: "Style",
      image: "/images/hatha.png",
    },
    6: {
      title: "Vinyasa",
      type: "Style",
      image: "/images/vinyasa.png",
    },
    7: {
      title: "Yin",
      type: "Style",
      image: "/images/yin.png",
    },
    8: {
      title: "Beginner",
      type: "Level",
      image: "/images/beginner.png",
    },
    9: {
      title: "Intermediate",
      type: "Level",
      image: "/images/intermediate.png",
    },
    10: {
      title: "Advanced",
      type: "Level",
      image: "/images/advanced.png",
    },
    11: {
      title: "Mixed",
      type: "Level",
      image: "/images/all-levels.png",
    },
  };

  // useEffect(() => {
  //   if (stage === 4) {
  //     setIsDone(true);
  //   } else {
  //     setIsDone(false);
  //   }
  // }, [stage]);

  const [selectedSequenceOptions, setSelectedSequenceOptions] = useState({
    theme_chakras: false,
    theme_season: false,
    theme_spirituality: false,
    theme_moon: false,
    style_power: false,
    style_hatha: false,
    style_vinyasa: false,
    style_yin: false,
    level_beginner: false,
    level_intermediate: false,
    level_advanced: false,
    level_mixed: false,
  });

  const selectionMapping = {
    Chakras: "theme_chakras",
    Seasons: "theme_season",
    Spirituality: "theme_spirituality",
    "Moon Cycle": "theme_moon",
    Power: "style_power",
    Hatha: "style_hatha",
    Vinyasa: "style_vinyasa",
    Yin: "style_yin",
    Beginner: "level_beginner",
    Intermediate: "level_intermediate",
    Advanced: "level_advanced",
    Mixed: "level_mixed",
  };

  const handleImageClick = (selection) => {
    setSelectedSequenceOptions((prevOptions) => ({
      ...prevOptions,
      [selectionMapping[selection]]: true,
    }));
  };

  switch (stage) {
    case 0:
      return (
        <>
          {console.log(JSON.stringify(selectedSequenceOptions, 0, 2))}
          <TindasanaAIHeader />
          <div className="flex flex-col items-center justify-center text-center">
            <Image
              src="/images/meditate-nobg.png"
              width="300"
              height="300"
              alt="Person meditating"
              className=""
              priority={false}
            />{" "}
            <br />
            <button className={buttonNextStyle} onClick={proceedToNextStage}>
              Start
            </button>
          </div>{" "}
          <br />
          <Footer />
        </>
      );
    case 1:
      return (
        <>
          {console.log(JSON.stringify(selectedSequenceOptions, 0, 2))}
          <TindasanaAIHeader />
          <div className="mt-10 flex flex-col items-center justify-center text-center">
            <span className="font-bold text-3xl text-gray-800">
              {" "}
              Pick Your Theme{" "}
            </span>
            <br />
            <div className="m-6 grid grid-cols-2 grid-rows-1 gap-4">
              <div className="">
                {" "}
                <Image
                  src={options[0].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[0].title}
                  className="rounded-full mb-2 hover:scale-105"
                  onClick={() => handleImageClick(options[0].title)}
                />{" "}
                <span className="font-semibold">{options[0].title}</span>
              </div>
              <div className="">
                {" "}
                <Image
                  src={options[1].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[1].title}
                  className="rounded-full hover:scale-105 mb-2"
                  onClick={() => handleImageClick(options[1].title)}
                />
                <span className="font-semibold">{options[1].title}</span>
              </div>
              <div className="">
                {" "}
                <Image
                  src={options[2].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[2].title}
                  className="rounded-full hover:scale-105 mb-2"
                  onClick={() => handleImageClick(options[2].title)}
                />
                <span className="font-semibold">{options[2].title}</span>
              </div>
              <div className="">
                {" "}
                <Image
                  src={options[3].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[3].title}
                  className="rounded-full hover:scale-105 mb-2"
                  onClick={() => handleImageClick(options[3].title)}
                />
                <span className="font-semibold">{options[3].title}</span>
              </div>
            </div>
            <BackForwardButtons />{" "}
          </div>
          <br />
          <Footer />
        </>
      );
    case 2:
      return (
        <>
          <div>
            {console.log(JSON.stringify(selectedSequenceOptions, 0, 2))}
            <TindasanaAIHeader />
            <div className="mt-10 flex flex-col items-center justify-center text-center">
              <span className="font-bold text-3xl text-gray-800">
                {" "}
                Select Your Style{" "}
              </span>
              <br />
              <div className="m-6 grid grid-cols-2 grid-rows-1 gap-4">
                <div className="">
                  <Image
                    src={options[4].image}
                    width={imgWidthSize}
                    height={imgHeightSize}
                    alt={options[4].title}
                    className="rounded-full hover:scale-105 mb-2"
                    onClick={() => handleImageClick(options[4].title)}
                  />{" "}
                  <span className="font-semibold">{options[4].title}</span>
                </div>
                <div className="">
                  <Image
                    src={options[5].image}
                    width={imgWidthSize}
                    height={imgHeightSize}
                    alt={options[5].title}
                    className="rounded-full hover:scale-105 mb-2"
                    onClick={() => handleImageClick(options[5].title)}
                  />{" "}
                  <span className="font-semibold">{options[5].title}</span>
                </div>
                <div className="">
                  <Image
                    src={options[6].image}
                    width={imgWidthSize}
                    height={imgHeightSize}
                    alt={options[6].title}
                    className="rounded-full hover:scale-105 mb-2"
                    onClick={() => handleImageClick(options[6].title)}
                  />{" "}
                  <span className="font-semibold">{options[6].title}</span>
                </div>
                <div className="">
                  <Image
                    src={options[7].image}
                    width={imgWidthSize}
                    height={imgHeightSize}
                    alt={options[7].title}
                    className="rounded-full hover:scale-105 mb-2"
                    onClick={() => handleImageClick(options[7].title)}
                  />{" "}
                  <span className="font-semibold">{options[7].title}</span>
                </div>
              </div>
              <BackForwardButtons />
            </div>
            <br />
            <Footer />
          </div>
        </>
      );
    case 3:
      return (
        <>
          <TindasanaAIHeader />
          {console.log(JSON.stringify(selectedSequenceOptions, 0, 2))}
          <div className="mt-10 flex flex-col items-center justify-center text-center">
            <span className="font-bold text-3xl text-gray-800">
              {" "}
              Choose Your Level
            </span>
            <br />
            <div className="m-6 grid grid-cols-2 grid-rows-1 gap-4">
              <div className="">
                <Image
                  src={options[8].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[8].title}
                  className="rounded-full hover:scale-105 mb-2"
                  onClick={() => handleImageClick(options[8].title)}
                />{" "}
                <span className="font-semibold">{options[8].title}</span>
              </div>
              <div className="">
                <Image
                  src={options[9].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[9].title}
                  className="rounded-full hover:scale-105 mb-2"
                  onClick={() => handleImageClick(options[9].title)}
                />{" "}
                <span className="font-semibold">{options[9].title}</span>
              </div>
              <div className="">
                <Image
                  src={options[10].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[10].title}
                  className="rounded-full hover:scale-105 mb-2"
                  onClick={() => handleImageClick(options[10].title)}
                />{" "}
                <span className="font-semibold">{options[10].title}</span>
              </div>
              <div className="">
                <Image
                  src={options[11].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[11].title}
                  className="rounded-full hover:scale-105 mb-2"
                  onClick={() => handleImageClick(options[11].title)}
                />{" "}
                <span className="font-semibold">{options[11].title}</span>
              </div>
            </div>
            <BackForwardButtons />
          </div>
          <br />
          <Footer />
        </>
      );
    case 4:
      return (
        <>
          <TindasanaAIHeader />

          {isDone ? (
            <div className="mt-10 flex flex-col items-center justify-center text-center">
              <span className="font-bold text-3xl text-gray-800"> Result</span>
              <br />
              <button
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={startAgain}
              >
                Start Over
              </button>{" "}
            </div>
          ) : (
            <div
              role="status"
              className="mt-12 mb-12 flex flex-col items-center justify-center"
            >
              <span className="mb-6 text-xl font-bold text-gray-400">
                🪄 Manifesting your unique yoga flow... <br />
                please float in patience for a some seconds... <br />
              </span>
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-violet-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span> <br />
              <button
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={startAgain}
              >
                Start Over
              </button>{" "}
            </div>
          )}

          <br />
          <Footer />
        </>
      );

    default:
      return null;
  }
}
