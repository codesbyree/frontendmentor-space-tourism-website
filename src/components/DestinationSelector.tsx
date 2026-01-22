import { useState } from "react";
import clsx from "clsx";

import MoonImage from "../assets/destination/image-moon.png";
import MoonImageWebp from "../assets/destination/image-moon.webp";
import MarsImage from "../assets/destination/image-mars.png";
import MarsImageWebp from "../assets/destination/image-mars.webp";
import EuropaImage from "../assets/destination/image-europa.png";
import EuropaImageWebp from "../assets/destination/image-europa.webp";
import TitanImage from "../assets/destination/image-titan.png";
import TitanImageWebp from "../assets/destination/image-titan.webp";

const destinationList = ["moon", "mars", "europa", "titan"] as const;

export type Destination = (typeof destinationList)[number];
type DestinationRecord = {
  title: Destination;
  description: string;
  imagePng: string;
  imageWebp: string;
  avgDistance: string;
  estTravelTime: string;
};
type Destinations = Record<Destination, DestinationRecord>;

const DESTINATIONS: Destinations = {
  moon: {
    title: "moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    imagePng: MoonImage.src,
    imageWebp: MoonImageWebp.src,
    avgDistance: "384,400 KM",
    estTravelTime: "3 DAYS",
  },
  mars: {
    title: "mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    imagePng: MarsImage.src,
    imageWebp: MarsImageWebp.src,
    avgDistance: "225 MIL. KM",
    estTravelTime: "9 MONTHS",
  },
  europa: {
    title: "europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    imagePng: EuropaImage.src,
    imageWebp: EuropaImageWebp.src,
    avgDistance: "628 MIL. KM",
    estTravelTime: "3 YEARS",
  },
  titan: {
    title: "titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    imagePng: TitanImage.src,
    imageWebp: TitanImageWebp.src,
    avgDistance: "1.6 BIL. KM",
    estTravelTime: "7 YEARS",
  },
};

const destinationImage = Object.values(DESTINATIONS).map((x) => ({
  png: x.imagePng,
  webp: x.imageWebp,
  title: x.title,
}));

const destinationDescription = Object.values(DESTINATIONS).map((x) => ({
  title: x.title,
  description: x.description,
}));

const avgDistance = Object.values(DESTINATIONS).map((x) => ({
  title: x.title,
  avgDistance: x.avgDistance,
}));

const travelTime = Object.values(DESTINATIONS).map((x) => ({
  title: x.title,
  travelTime: x.estTravelTime,
}));

export default function DestinationSelector() {
  const [selectedDestinations, setSelectedDestinations] =
    useState<Destination>("moon");

  return (
    <div className="flex-1 flex flex-col gap-8 xl:flex-row xl:gap-8">
      {/* ------- image */}
      <div className="relative grid place-items-center py-4 md:py-10 xl:flex-1">
        <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] xl:w-[480px] xl:h-[480px] relative">
          {destinationImage.map((dest) => (
            <img
              key={dest.title}
              className={clsx(
                "absolute top-0 left-0 transition-all duration-300 w-full h-full",
                selectedDestinations === dest.title
                  ? "opacity-100 rotate-0"
                  : "opacity-0 rotate-6",
              )}
              src={dest.png}
              srcSet={dest.webp}
              alt={dest.title}
            />
          ))}
        </div>
      </div>

      {/* --------- explanation */}
      <div className="flex-1 xl:flex xl:items-center xl:justify-center">
        <div className="flex-1 flex flex-col gap-6 md:max-w-lg md:mx-auto xl:max-w-md xl:gap-10">
          <div className="flex justify-center gap-8 xl:justify-start">
            {destinationList.map((dest) => (
              <button
                onClick={() => setSelectedDestinations(dest)}
                key={dest}
                className={clsx(
                  "font-sans-codensed text-sm tracking-wider uppercase transition-colors duration-300 relative md:text-base md:tracking-widest",
                  selectedDestinations === dest
                    ? "text-white"
                    : "text-blue-300",
                )}
              >
                <span>{dest}</span>
                <span
                  className={clsx(
                    "absolute left-0 w-full h-[3px] bg-white transition-all duration-200",
                    selectedDestinations === dest
                      ? "opacity-100 -bottom-2"
                      : "opacity-0 bottom-0",
                  )}
                ></span>
              </button>
            ))}
          </div>

          <div className="flex flex-1 flex-col gap-4 mt-4">
            <h2 className="uppercase text-white font-serif text-center text-6xl md:text-8xl xl:text-left">
              {selectedDestinations}
            </h2>

            <div className="relative min-h-36 md:min-h-20 xl:min-h-28">
              {destinationDescription.map((desc) => (
                <p
                  key={desc.title}
                  className={clsx(
                    "text-base absolute top-0 self-center text-blue-300 leading-7 font-sans text-center transition-all duration-500 xl:text-left xl:text-lg",
                    selectedDestinations === desc.title
                      ? "opacity-100"
                      : "opacity-0",
                  )}
                >
                  {desc.description}
                </p>
              ))}
            </div>
          </div>

          <span className="block w-full h-[1px] bg-white/25"></span>

          {/* statistics */}
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="w-full flex flex-col gap-3 overflow-hidden ">
              <h2 className="font-sans-codensed tracking-wider text-blue-300 text-sm text-center xl:text-left">
                AVG. DISTANCE
              </h2>

              <div
                className={clsx(
                  "w-full flex flex-row transition-transform duration-300",
                  selectedDestinations === "moon" && "translate-x-[0]",
                  selectedDestinations === "mars" && "translate-x-[-100%]",
                  selectedDestinations === "europa" && "translate-x-[-200%]",
                  selectedDestinations === "titan" && "translate-x-[-300%]",
                )}
              >
                {avgDistance.map((dist) => (
                  <p
                    key={dist.title}
                    className="block w-full flex-shrink-0 text-center font-serif text-2xl text-white xl:text-left"
                  >
                    {dist.avgDistance}
                  </p>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 overflow-hidden">
              <h2 className="font-sans-codensed tracking-wider text-blue-300 text-sm text-center xl:text-left">
                EST. TRAVEL TIME
              </h2>

              <div
                className={clsx(
                  "w-full flex flex-row transition-transform duration-300",
                  selectedDestinations === "moon" && "translate-x-[0]",
                  selectedDestinations === "mars" && "translate-x-[-100%]",
                  selectedDestinations === "europa" && "translate-x-[-200%]",
                  selectedDestinations === "titan" && "translate-x-[-300%]",
                )}
              >
                {travelTime.map((t) => (
                  <div
                    key={t.travelTime + t.title}
                    className="w-full flex-shrink-0"
                  >
                    <p className="text-center font-serif text-2xl text-white xl:text-left">
                      {t.travelTime}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
