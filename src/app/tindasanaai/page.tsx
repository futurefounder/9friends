"use client";

import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import TindasanaAIHeader from "../components/TindasanaAIHeader";
import Footer from "../components/Footer";
import Script from "next/script";

interface Choice {
  text: string;
}

interface ApiResponse {
  choices: Choice[];
}

interface TindasaAIProps {
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  handleImageClick: (selection: string) => void;
  selectedSequenceOptions: {
    theme_chakras: boolean;
    theme_season: boolean;
    theme_spirituality: boolean;
    theme_moon: boolean;
    style_power: boolean;
    style_hatha: boolean;
    style_vinyasa: boolean;
    style_yin: boolean;
    level_beginner: boolean;
    level_intermediate: boolean;
    level_advanced: boolean;
    level_mixed: boolean;
    [key: string]: boolean;
  };
  startAgain: () => void;
  isDone: boolean;
  MAX_CALLS: number;
  currentCount: number;
  setCurrentCount: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
  apiResponse: ApiResponse | null;
  setApiResponse: React.Dispatch<React.SetStateAction<ApiResponse | null>>;
  isDataLoaded: boolean;
  setIsDataLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

function TindasaAI({
  stage,
  setStage,
  handleImageClick,
  selectedSequenceOptions,
  startAgain,
  isDone,
  setIsDone,
  apiResponse,
  setApiResponse,
  MAX_CALLS,
  currentCount,
  setCurrentCount,
  isDataLoaded,
  setIsDataLoaded,
}: TindasaAIProps) {
  const imgWidthSize = 150;
  const imgHeightSize = 150;

  const buttonNextStyle =
    "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

  const proceedToNextStage = () => {
    setStage((prevStage) => prevStage + 1);
  };

  const goBack = () => {
    setStage((prevStage) => (prevStage > 0 ? prevStage - 1 : prevStage));
  };

  // const setSelection = (category, selection) => {
  //   setSelections((prevSelections) => ({
  //     ...prevSelections,
  //     [category]: selection,
  //   }));
  // };

  function BackForwardButtons() {
    return (
      <>
        {" "}
        <div className="flex flex-row mt-4 mb-3">
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

  interface GenerationsLeftProps {
    MAX_CALLS: TindasaAIProps["MAX_CALLS"];
    currentCount: TindasaAIProps["currentCount"];
    isDataLoaded: TindasaAIProps["isDataLoaded"];
    setIsDataLoaded: TindasaAIProps["setIsDataLoaded"];
  }

  function GenerationsLeft({
    MAX_CALLS,
    currentCount,
    isDataLoaded,
    setIsDataLoaded,
  }: GenerationsLeftProps) {
    return (
      <>
        <div className="flex items-center justify-center p-1.5 text-xs font-bold bg-slate-100 text-gray-500 rounded-md">
          Generations left: {isDataLoaded ? "..." : MAX_CALLS - currentCount}
        </div>
      </>
    );
  }

  function StartOverButton({
    MAX_CALLS,
    currentCount,
    isDataLoaded,
    setIsDataLoaded,
  }: GenerationsLeftProps) {
    return (
      <>
        <button
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={startAgain}
        >
          Start Over
        </button>
        <GenerationsLeft
          MAX_CALLS={MAX_CALLS}
          currentCount={currentCount}
          isDataLoaded={false}
          setIsDataLoaded={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
        />
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

  useEffect(() => {
    if (stage === 4) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, [stage]);

  switch (stage) {
    case 0:
      return (
        <>
          <TindasanaAIHeader />
          <div className="flex flex-col items-center justify-center min-h-full mt-10 mb-10 text-center">
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
            <div className="p-2 mt-2 text-xs font-bold text-gray-500 rounded-md bg-slate-100">
              Generations left:{" "}
              {isDataLoaded ? MAX_CALLS - currentCount : "..."}
              <br />
            </div>
            <span className="p-4 text-xs italic text-fuchsia-600">
              {MAX_CALLS - currentCount === 0
                ? "You can still click through the options, but will not be able to generate more today"
                : null}
            </span>
          </div>{" "}
          <br />
          <Footer />
        </>
      );
    case 1:
      return (
        <>
          <TindasanaAIHeader />
          <GenerationsLeft
            MAX_CALLS={MAX_CALLS}
            currentCount={currentCount}
            isDataLoaded={false}
            setIsDataLoaded={function (value: SetStateAction<boolean>): void {
              throw new Error("Function not implemented.");
            }}
          />
          <div className="flex flex-col items-center justify-center mt-6 text-center md:mt-10">
            <span className="text-2xl font-bold text-gray-800 md:text-3xl">
              {" "}
              Pick One Or More Themes{" "}
            </span>
            <br />
            <div className="grid min-h-full grid-cols-2 grid-rows-1 gap-4 m-4">
              <div className="">
                {" "}
                <Image
                  src={options[0].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  priority={true}
                  className={`rounded-full hover:scale-105 mb-2 ${
                    selectedSequenceOptions[
                      Object.keys(selectedSequenceOptions)[0]
                    ]
                      ? "opacity-100 ring-4 ring-purple-500"
                      : "opacity-50"
                  }`}
                  alt={options[0].title}
                  onClick={() => handleImageClick(options[0].title)}
                />
                <span className="font-semibold">{options[0].title}</span>
              </div>
              <div className="">
                {" "}
                <Image
                  src={options[1].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[1].title}
                  priority={true}
                  className={`rounded-full hover:scale-105 mb-2 ${
                    selectedSequenceOptions[
                      Object.keys(selectedSequenceOptions)[1]
                    ]
                      ? "opacity-100 ring-4 ring-purple-500"
                      : "opacity-50"
                  }`}
                  onClick={(event) => handleImageClick(options[1].title)}
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
                  priority={true}
                  className={`rounded-full hover:scale-105 mb-2 ${
                    selectedSequenceOptions[
                      Object.keys(selectedSequenceOptions)[2]
                    ]
                      ? "opacity-100 ring-4 ring-purple-500"
                      : "opacity-50"
                  }`}
                  onClick={(event) => handleImageClick(options[2].title)}
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
                  priority={true}
                  className={`rounded-full hover:scale-105 mb-2 ${
                    selectedSequenceOptions[
                      Object.keys(selectedSequenceOptions)[3]
                    ]
                      ? "opacity-100 ring-4 ring-purple-500"
                      : "opacity-50"
                  }`}
                  onClick={(event) => handleImageClick(options[3].title)}
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
            <TindasanaAIHeader />
            <GenerationsLeft
              MAX_CALLS={MAX_CALLS}
              currentCount={currentCount}
              isDataLoaded={false}
              setIsDataLoaded={function (value: SetStateAction<boolean>): void {
                throw new Error("Function not implemented.");
              }}
            />
            <div className="flex flex-col items-center justify-center mt-6 text-center md:mt-10">
              <span className="text-2xl font-bold text-gray-800 md:text-3xl">
                {" "}
                Select Your Style{" "}
              </span>
              <br />
              <div className="grid min-h-full grid-cols-2 grid-rows-1 gap-4 m-4">
                <div className="">
                  <Image
                    src={options[4].image}
                    width={imgWidthSize}
                    height={imgHeightSize}
                    alt={options[4].title}
                    priority={true}
                    className={`rounded-full hover:scale-105 mb-2 ${
                      selectedSequenceOptions[
                        Object.keys(selectedSequenceOptions)[4]
                      ]
                        ? "opacity-100 ring-4 ring-purple-500"
                        : "opacity-50"
                    }`}
                    onClick={(event) => handleImageClick(options[4].title)}
                  />{" "}
                  <span className="font-semibold">{options[4].title}</span>
                </div>
                <div className="">
                  <Image
                    src={options[5].image}
                    width={imgWidthSize}
                    height={imgHeightSize}
                    alt={options[5].title}
                    priority={true}
                    className={`rounded-full hover:scale-105 mb-2 ${
                      selectedSequenceOptions[
                        Object.keys(selectedSequenceOptions)[5]
                      ]
                        ? "opacity-100 ring-4 ring-purple-500"
                        : "opacity-50"
                    }`}
                    onClick={(event) => handleImageClick(options[5].title)}
                  />{" "}
                  <span className="font-semibold">{options[5].title}</span>
                </div>
                <div className="">
                  <Image
                    src={options[6].image}
                    width={imgWidthSize}
                    height={imgHeightSize}
                    alt={options[6].title}
                    priority={true}
                    className={`rounded-full hover:scale-105 mb-2 ${
                      selectedSequenceOptions[
                        Object.keys(selectedSequenceOptions)[6]
                      ]
                        ? "opacity-100 ring-4 ring-purple-500"
                        : "opacity-50"
                    }`}
                    onClick={(event) => handleImageClick(options[6].title)}
                  />{" "}
                  <span className="font-semibold">{options[6].title}</span>
                </div>
                <div className="">
                  <Image
                    src={options[7].image}
                    width={imgWidthSize}
                    height={imgHeightSize}
                    alt={options[7].title}
                    priority={true}
                    className={`rounded-full hover:scale-105 mb-2 ${
                      selectedSequenceOptions[
                        Object.keys(selectedSequenceOptions)[7]
                      ]
                        ? "opacity-100 ring-4 ring-purple-500"
                        : "opacity-50"
                    }`}
                    onClick={(event) => handleImageClick(options[7].title)}
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
          <GenerationsLeft
            MAX_CALLS={MAX_CALLS}
            currentCount={currentCount}
            isDataLoaded={false}
            setIsDataLoaded={function (value: SetStateAction<boolean>): void {
              throw new Error("Function not implemented.");
            }}
          />
          <div className="flex flex-col items-center justify-center mt-6 text-center md:mt-10">
            <span className="text-2xl font-bold text-gray-800 md:text-3xl">
              {" "}
              Choose Your Level
            </span>
            <br />
            <div className="grid min-h-full grid-cols-2 grid-rows-1 gap-4 m-4">
              <div className="">
                <Image
                  src={options[8].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[8].title}
                  priority={true}
                  className={`rounded-full hover:scale-105 mb-2 ${
                    selectedSequenceOptions[
                      Object.keys(selectedSequenceOptions)[8]
                    ]
                      ? "opacity-100 ring-4 ring-purple-500"
                      : "opacity-50"
                  }`}
                  onClick={(event) => handleImageClick(options[8].title)}
                />{" "}
                <span className="font-semibold">{options[8].title}</span>
              </div>
              <div className="">
                <Image
                  src={options[9].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[9].title}
                  priority={true}
                  className={`rounded-full hover:scale-105 mb-2 ${
                    selectedSequenceOptions[
                      Object.keys(selectedSequenceOptions)[9]
                    ]
                      ? "opacity-100 ring-4 ring-purple-500"
                      : "opacity-50"
                  }`}
                  onClick={(event) => handleImageClick(options[9].title)}
                />{" "}
                <span className="font-semibold">{options[9].title}</span>
              </div>
              <div className="">
                <Image
                  src={options[10].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[10].title}
                  priority={true}
                  className={`rounded-full hover:scale-105 mb-2 ${
                    selectedSequenceOptions[
                      Object.keys(selectedSequenceOptions)[10]
                    ]
                      ? "opacity-100 ring-4 ring-purple-500"
                      : "opacity-50"
                  }`}
                  onClick={(event) => handleImageClick(options[10].title)}
                />{" "}
                <span className="font-semibold">{options[10].title}</span>
              </div>
              <div className="">
                <Image
                  src={options[11].image}
                  width={imgWidthSize}
                  height={imgHeightSize}
                  alt={options[11].title}
                  priority={true}
                  className={`rounded-full hover:scale-105 mb-2 ${
                    selectedSequenceOptions[
                      Object.keys(selectedSequenceOptions)[11]
                    ]
                      ? "opacity-100 ring-4 ring-purple-500"
                      : "opacity-50"
                  }`}
                  onClick={(event) => handleImageClick(options[11].title)}
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
            <>
              {(apiResponse as any)?.choices?.[0]?.text ? (
                <>
                  <div className="flex flex-col items-center justify-center mt-6 text-center md:mt-10">
                    <span className="text-2xl font-bold text-gray-800 md:text-3xl">
                      🔮 Your Sequence
                    </span>
                    <br />
                    <div className="p-4 mb-8 overflow-auto font-sans text-base text-center text-gray-700 whitespace-pre-wrap border border-gray-300 w-96 h-96">
                      {(apiResponse as any).choices[0].text}
                    </div>
                    <Script
                      id="emojicom"
                      src="https://cdn.emojicom.io/embed/widget.js"
                      strategy="afterInteractive"
                    />
                    <Script id="emojicom-inline">{`window.emojicom_widget = { campaign: "0fWxQtJEFYSeB9Do6sY7" }`}</Script>
                    <div id="emojicom-widget-inline"></div>
                    <br />
                    <br />
                    <StartOverButton
                      MAX_CALLS={MAX_CALLS}
                      currentCount={currentCount}
                      isDataLoaded={isDataLoaded}
                      setIsDataLoaded={function (
                        value: SetStateAction<boolean>
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                    />
                  </div>{" "}
                </>
              ) : (
                <div
                  role="status"
                  className="flex flex-col items-center justify-center mt-12 mb-12 text-center"
                >
                  <span className="text-xl font-bold text-gray-400">
                    🪄 Manifesting your unique yoga flow... <br />
                    please float in patience for a few mindful moments! <br />{" "}
                    (this might take up to 20 seconds)
                  </span>
                  <br />
                  <br />
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
                  <span className="sr-only">Limit reached.</span>
                </div>
              )}
            </>
          ) : (
            <>Loading</>
          )}
          <br />
          <Footer />
        </>
      );

    default:
      return null;
  }
}
// Wrapper component to save state across renders
function TindasanaAIWrapper() {
  const [stage, setStage] = useState(0);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [isDone, setIsDone] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const MAX_CALLS = 30;
  const [currentCount, setCurrentCount] = useState<number>(0);

  useEffect(() => {
    const storedCount = getDataOrResetIfNewDay("apiCallCount") || 0;
    setCurrentCount(storedCount);
    setIsDataLoaded(true);
  }, []);

  // Get generations count with date

  const setDataWithDate = (key: string, value: number) => {
    const dataWithDate = {
      value: value,
      lastAccessedDate: new Date().toISOString().split("T")[0], // stores just the date
    };
    localStorage.setItem(key, JSON.stringify(dataWithDate));
  };

  const getDataOrResetIfNewDay = (key: string) => {
    const dataStr = localStorage.getItem(key);
    if (!dataStr) return null;

    const dataObj = JSON.parse(dataStr);
    const currentDate = new Date().toISOString().split("T")[0];

    if (currentDate !== dataObj.lastAccessedDate) {
      localStorage.removeItem(key);
      return null;
    }
    return dataObj.value;
  };

  const canMakeApiCall = () => {
    return currentCount < MAX_CALLS;
  };

  const incrementApiCallCount = () => {
    const newCount = currentCount + 1;
    setCurrentCount(newCount);
    setDataWithDate("apiCallCount", newCount);
  };

  const fetchAPI = async () => {
    if (!canMakeApiCall()) {
      alert(
        "🧘‍♂️✨ Oh, dear yogi! You've flowed through all your sequences for today. 🌙 Take a deep breath, embrace the present moment, and return tomorrow for more enlightening journeys. 🌅 Namaste! 🙏 The universe will now refresh the app for you. 🌀"
      );
      setStage(0);
      return;
    }

    try {
      const response = await fetch("/api/myapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedSequenceOptions,
        }),
      });

      const data = await response.json();
      setApiResponse(data);
      incrementApiCallCount();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (isDone) {
      fetchAPI();
    }
  }, [isDone]);

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

  const handleImageClick = (selection: string) => {
    setSelectedSequenceOptions((prevOptions) => {
      // @ts-ignore
      const newSelection = !prevOptions[selectionMapping[selection]];
      return {
        ...prevOptions,
        // @ts-ignore
        [selectionMapping[selection]]: newSelection,
      };
    });
  };

  const startAgain = () => {
    const userConfirmation = window.confirm("Reloading app. Are you sure?");
    if (userConfirmation) {
      window.location.reload();
    }
  };

  return (
    <TindasaAI
      handleImageClick={handleImageClick}
      selectedSequenceOptions={selectedSequenceOptions}
      startAgain={startAgain}
      stage={stage}
      setStage={setStage}
      isDone={isDone}
      setIsDone={setIsDone}
      apiResponse={apiResponse}
      setApiResponse={setApiResponse}
      MAX_CALLS={MAX_CALLS}
      currentCount={currentCount}
      setCurrentCount={setCurrentCount}
      isDataLoaded={isDataLoaded}
      setIsDataLoaded={setIsDataLoaded}
    />
  );
}

export default TindasanaAIWrapper;
