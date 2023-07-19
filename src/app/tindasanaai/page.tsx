"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TindasaAI() {
  const [apiResponse, setApiResponse] = useState(null);
  const [optionIndex, setOptionIndex] = useState(-1);
  const optionKeys = [
    "start",
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
    start: false,
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
    const fetchAPI = async () => {
      try {
        const response = await fetch("/api/myapi");
        const data = await response.json();
        setApiResponse(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchAPI();
  }, []);

  const [isClickedYes, setIsClickedYes] = useState(false);
  const [isClickedNo, setIsClickedNo] = useState(false);
  const [isClickedBack, setIsClickedBack] = useState(false);

  const handleClickYes = () => {
    setIsClickedYes(true);
    setTimeout(() => {
      setIsClickedYes(false);
    }, 150);

    setSelectedSequenceOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };

      const currentOption = optionKeys[optionIndex];
      updatedOptions[currentOption] = true;

      setOptionIndex((prevIndex) => (prevIndex + 1) % optionKeys.length);

      return updatedOptions;
    });
  };

  const handleClickNo = () => {
    setIsClickedNo(true);
    setTimeout(() => {
      setIsClickedNo(false);
    }, 150);

    setSelectedSequenceOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };

      const currentOption = optionKeys[optionIndex];
      updatedOptions[currentOption] = false;

      setOptionIndex((prevIndex) => (prevIndex + 1) % optionKeys.length);

      return updatedOptions;
    });
  };

  const handleClickBack = () => {
    setIsClickedBack(true);
    setTimeout(() => {
      setIsClickedBack(false);
    }, 150);
    setOptionIndex((prevIndex) => prevIndex - 1);
  };

  let content = (
    <div>
      <div className="text-center">
        <Image
          src="/images/person-meditating.svg"
          width={imgWidthSize}
          height={imgHeightSize}
          alt="Person meditating"
          className="rounded-full"
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
      title: "Done",
      type: "Done",
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
        <span className="text-3xl text-gray-400 font-bold">{option.type}</span>
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
        <br />
        <br />
      </div>
    );
  };

  if (optionIndex >= 0 && optionIndex < 11) {
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
    content = <OptionComponent option={options[optionsIndex]} />;
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
              className={`p-4 m-2 rounded-full bg-sky-50 text-xl ${
                isClickedBack ? "text-2xl bg-sky-400" : ""
              }`}
              onClick={() => {
                handleClickBack();
              }}
            >
              ↩️
            </button>
            <button
              className={`p-6 m-4 rounded-full bg-red-50 text-5xl ${
                isClickedNo ? "text-6xl bg-red-400" : ""
              }`}
              onClick={() => {
                handleClickNo();
              }}
            >
              ❌{" "}
            </button>
          </div>
          <div className="flex items-center justify-center flex-1">
            {" "}
            <button
              className={`p-6 m-4 rounded-full bg-green-50 text-5xl ${
                isClickedYes ? "text-6xl bg-green-300" : ""
              }`}
              onClick={() => {
                handleClickYes();
                // handleAPICall();
                console.log(optionIndex);
                console.log(selectedSequenceOptions);
              }}
            >
              {" "}
              💚
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
