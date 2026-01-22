import { useState } from "react";
import clsx from "clsx";

import DouglasPng from "../assets/crew/image-douglas-hurley.png";
import DouglasWebp from "../assets/crew/image-douglas-hurley.webp";
import MarkPng from "../assets/crew/image-mark-shuttleworth.webp";
import MarkWebp from "../assets/crew/image-mark-shuttleworth.png";
import VictorPng from "../assets/crew/image-victor-glover.png";
import VictorWebp from "../assets/crew/image-victor-glover.webp";
import AnoushehPng from "../assets/crew/image-anousheh-ansari.png";
import AnoushehWebp from "../assets/crew/image-anousheh-ansari.webp";

type CrewTypes = {
  id: number;
  title: string;
  name: string;
  description: string;
  image: { png: string; webp: string };
};

const crews: CrewTypes[] = [
  {
    id: 1,
    title: "COMMANDER",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: { png: DouglasPng.src, webp: DouglasWebp.src },
  },
  {
    id: 2,
    title: "MISSION SPECIALIST",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: { png: MarkPng.src, webp: MarkWebp.src },
  },
  {
    id: 3,
    title: "PILOT",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: { png: VictorPng.src, webp: VictorWebp.src },
  },
  {
    id: 4,
    title: "FLIGHT ENGINEER",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: { png: AnoushehPng.src, webp: AnoushehWebp.src },
  },
];

const crewsNameAndDescription = crews.map((c) => ({
  id: c.id,
  name: c.name,
  description: c.description,
  title: c.title,
}));
const crewsImages = crews.map((c) => ({ id: c.id, image: c.image }));
const crewsId = [1, 2, 3, 4];

export default function CrewSlider() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex-1 grid grid-rows-2 gap-8 md:grid-rows-[.48fr,_1fr] xl:grid-rows-1 xl:grid-cols-2">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col justify-between md:w-full md:max-w-lg md:mx-auto xl:grid xl:grid-rows-[1fr,_max-content] xl:gap-10 xl:max-w-full xl:grid-cols-1 xl:relative xl:z-20">
          <div className="relative flex-1 flex xl:flex-row xl:items-center">
            {crewsNameAndDescription.map((cd) => (
              <CrewDetail data={cd} activeIndex={activeIndex} key={cd.id} />
            ))}
          </div>

          <div className="flex gap-4 justify-center xl:pb-12 xl:justify-start xl:gap-10">
            {crewsId.map((i) => (
              <button
                onClick={() => setActiveIndex(i)}
                className={clsx(
                  "w-2 h-2 xl:w-4 xl:h-4 rounded-full transition-colors duration-300",
                  activeIndex === i ? "bg-white" : "bg-white/50",
                )}
                key={i}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden xl:z-0">
        <div
          className={clsx(
            "flex flex-row absolute top-0 left-0 h-full w-full transition-all duration-700",
            activeIndex === 1 && "translate-x-[0]",
            activeIndex === 2 && "translate-x-[-100%]",
            activeIndex === 3 && "translate-x-[-200%]",
            activeIndex === 4 && "translate-x-[-300%]",
          )}
        >
          {crewsImages.map((ci) => (
            <img
              key={"img" + ci.id}
              src={ci.image.png}
              srcSet={ci.image.webp}
              className={clsx(
                "block h-full w-full object-contain flex-shrink-0 transition-all duration-200",
                activeIndex === ci.id
                  ? "opacity-1 scale-100"
                  : "opacity-0 scale-95",
              )}
              alt=""
            />
          ))}
        </div>
      </div>

      <div className="w-full h-28 bg-gradient-to-t from-[rgba(11,13,22,1)] to-[rgba(11,13,22,0)] via-[rgba(11,13,22,.8)] absolute bottom-0 left-0 xl:h-60 z-10"></div>
    </div>
  );
}

type CrewDetailProps = {
  activeIndex: number;
  data: Omit<CrewTypes, "image">;
};

function CrewDetail({ activeIndex, data }: CrewDetailProps) {
  return (
    <article
      className={clsx(
        "absolute gap-6 flex flex-col",
        activeIndex === data.id ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="flex flex-col-reverse gap-2 md:gap-4">
        <h2
          aria-label="crew name"
          className={clsx(
            "text-center font-serif uppercase text-white text-2xl transition-all duration-500 md:text-4xl xl:text-left xl:text-[3.5rem] xl:leading-[3.5rem]",
            activeIndex === data.id
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5",
          )}
        >
          {data.name}
        </h2>
        <h3
          aria-label="job title"
          className="text-center font-serif text-white/50 text-lg md:text-2xl xl:text-left xl:text-3xl"
        >
          {data.title}
        </h3>
      </div>

      <p
        aria-label="job description"
        className="text-center font-sans text-blue-300 leading-7 text-base xl:text-left"
      >
        {data.description}
      </p>
    </article>
  );
}
