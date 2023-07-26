"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Choice {
  text: string;
}

interface ApiResponse {
  choices: Choice[];
}

export default function TindasaAI() {
  const [isClickedYes] = useState(false);
  const [isClickedNo] = useState(false);
  const [isClickedBack, setIsClickedBack] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const [optionIndex, setOptionIndex] = useState(-1);
  const optionKeys = [
    "theme_chakras",
    "theme_season",
    "theme_spirituality",
    "theme_moon",
    "style_power",
    "style_hatha",
    "style_vinyasa",
    "style_yin",
    "level_beginner",
    "level_intermediate",
    "level_advanced",
  ];

  const imgWidthSize = 300;
  const imgHeightSize = 300;

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
  });

  useEffect(() => {
    if (optionIndex === 11) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, [optionIndex]);

  const fetchAPI = async () => {
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (isDone) {
      fetchAPI();
    }
  }, [fetchAPI, isDone]);

  const handleClickYes = () => {
    setSelectedSequenceOptions((prevState) => {
      const keys = Object.keys(prevState);
      const currentOption = keys[optionIndex];

      return {
        ...prevState,
        [currentOption]: true,
      };
    });

    setOptionIndex((prevIndex) => prevIndex + 1);
  };

  const handleClickNo = () => {
    setSelectedSequenceOptions((prevState) => {
      const keys = Object.keys(prevState);
      const currentOption = keys[optionIndex];

      return {
        ...prevState,
        [currentOption]: false,
      };
    });

    setOptionIndex((prevIndex) => prevIndex + 1);
  };

  const handleClickBack = () => {
    setIsClickedBack(true);
    setTimeout(() => {
      setIsClickedBack(false);
    }, 150);
    setOptionIndex((prevIndex) => prevIndex - 1);
  };

  const handleClickRepeat = () => {
    window.location.reload();
  };

  let content = (
    <div>
      {/* {console.log(JSON.stringify(selectedSequenceOptions, null, 4))} */}
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
        <span className="text-xl font-base"> Start by clicking 💚</span>{" "}
      </div>{" "}
    </div>
  );

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
      title: "Moon",
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
      title: "Result",
      type: "Result",
      image: "/images/done.png",
    },
  };

  const OptionComponent = ({
    option,
  }: {
    option: { title: string; type: string; image: string };
  }) => {
    return (
      <div>
        <br />

        {isDone ? (
          <>
            {apiResponse?.choices?.[0]?.text ? (
              <>
                <br />
                <br />
                <span className="text-3xl font-bold text-gray-800">
                  🔮 Your Sequence:
                </span>
                <br />
                <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto overflow-auto">
                  <pre className="whitespace-pre-wrap text-center font-sans text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                    {apiResponse.choices[0].text}
                  </pre>
                </div>{" "}
                <br />
                <br />{" "}
                <button
                  onClick={handleClickRepeat}
                  className="text-xl text-gray-800 hover:text-purple-600 font-bold p-4 m-2 rounded-full text-sm md:text-xl"
                >
                  🔄 Start again
                </button>{" "}
              </>
            ) : (
              <div
                role="status"
                className="flex flex-col items-center justify-center"
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
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {/* {console.log(
              "API usage response is " +
                JSON.stringify(apiResponse?.usage, null, 4)
            )} */}
          </>
        ) : (
          <>
            {" "}
            <span className="text-3xl font-bold text-gray-400">
              {option.type}
            </span>
            <br />
            <br />
            <Image
              src={option.image}
              width={imgWidthSize}
              height={imgHeightSize}
              alt={option.title}
              className="rounded-full"
            />
            <br />
            <span className="text-2xl font-base">{option.title}</span>
          </>
        )}
        <br />
        <br />
      </div>
    );
  };

  if (optionIndex >= 0 && optionIndex < 12) {
    // @ts-ignore
    content = <OptionComponent option={options[optionIndex]} />;
  }
  if (optionIndex === 0) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 1) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 2) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 3) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 4) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 5) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 6) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 7) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 8) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 9) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 10) {
    content = <OptionComponent option={options[optionIndex]} />;
  } else if (optionIndex === 11) {
    content = <OptionComponent option={options[optionIndex]} />;
  }

  return (
    <div>
      <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white/50 backdrop-blur dark:bg-gray-100">
        <div className="flex flex-wrap items-center justify-center max-w-screen-xl p-4 mx-auto ">
          <span className="text-3xl font-black text-transparent animate-text bg-gradient-to-r from-emerald-500 via-purple-500 to-red-500 bg-clip-text">
            {" "}
            TindasanaAI
          </span>{" "}
        </div>{" "}
      </nav>
      <div className="flex flex-col h-screen">
        <div className="flex items-center justify-center flex-1 bg-slate-100">
          {" "}
          <div className="flex flex-col text-center"> {content}</div>{" "}
        </div>
        {/* {apiResponse && <pre>{JSON.stringify(apiResponse, null, 2)}</pre>} */}
        <div className="flex flex-row flex-1">
          {" "}
          <div className="flex items-center justify-center flex-1 ">
            {" "}
            <button
              disabled={isDone ? true : false}
              className={`p-4 m-2 rounded-full bg-sky-50 text-sm md:text-xl ${
                isClickedBack ? "text-2xl bg-sky-400" : ""
              } ${
                isDone
                  ? "shadow-md"
                  : "shadow-md transform active:scale-125 transition-transform"
              }`}
              onClick={() => {
                handleClickBack();
              }}
            >
              {isDone ? "🔮" : "↩️"}
            </button>
            <button
              disabled={isDone ? true : false}
              className={`p-6 m-4 rounded-full bg-red-50 text-lg md:text-5xl ${
                isClickedNo ? "text-6xl bg-red-400" : ""
              } ${
                isDone
                  ? "shadow-md"
                  : "shadow-md transform active:scale-125 transition-transform"
              }`}
              onClick={() => {
                handleClickNo();
              }}
            >
              {isDone ? "🔮" : "❌"}
            </button>
          </div>
          <div className="flex items-center justify-center flex-1">
            {" "}
            <button
              disabled={isDone ? true : false}
              className={`p-6 m-4 rounded-full bg-green-50 text-lg md:text-5xl ${
                isClickedYes ? "text-6xl bg-green-300" : ""
              } ${
                isDone
                  ? "shadow-md"
                  : "shadow-md transform active:scale-125 transition-transform"
              }`}
              onClick={() => {
                handleClickYes();
                // handleAPICall();
                // console.log(JSON.stringify(selectedSequenceOptions, null, 4));
              }}
            >
              {isDone ? "🔮" : "💚"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
