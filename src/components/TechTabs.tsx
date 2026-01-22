import { useState } from "react";
import clsx from "clsx";

import LaunchVehicleLandsccape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import LaunchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import SpaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import SpaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import SpaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";

const techIds = [1, 2, 3] as const;
type TechTypes = {
  id: (typeof techIds)[number];
  name: string;
  description: string;
  image: { portrait: string; landscape: string };
};

const techs: TechTypes[] = [
  {
    id: 1,
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: {
      landscape: LaunchVehicleLandsccape.src,
      portrait: LaunchVehiclePortrait.src,
    },
  },
  {
    id: 2,
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: {
      landscape: SpaceportLandscape.src,
      portrait: SpaceportPortrait.src,
    },
  },
  {
    id: 3,
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: {
      landscape: SpaceCapsuleLandscape.src,
      portrait: SpaceCapsulePortrait.src,
    },
  },
];

const techImages = Object.values(techs).map((t) => ({
  id: t.id,
  image: t.image,
}));

const techExplanations = Object.values(techs).map((t) => ({
  id: t.id,
  name: t.name,
  description: t.description,
}));

export default function TechTabs() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex-1 gap-8 grid grid-rows-[max-content,1fr] xl:grid-rows-1 xl:grid-cols-[1fr,_.9fr] xl:items-center">
      <div className="flex-1 pt-16 xl:order-2 xl:pt-0 bg-blue-600">
        <div className="-mx-6 relative pt-[calc((86/125)*100%)] md:pt-[calc((89/192)*100%)] md:-mx-10 xl:pt-[calc((1/1)*100%)] xl:mx-0 xl:-mr-[calc((100vw-1110px)/2)]">
          {techImages.map((img) => (
            <picture key={img.id}>
              <source media="(min-width: 1280px)" srcSet={img.image.portrait} />
              <source media="(min-width: 767px)" srcSet={img.image.landscape} />
              <img
                src={img.image.portrait}
                alt=""
                className={clsx(
                  "absolute w-full h-full object-cover transition-all duration-300 top-0 left-0",
                  activeIndex === img.id ? "opacity-100" : "opacity-0",
                )}
              />
            </picture>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 xl:flex-row xl:h-max xl:gap-16">
        <div className="flex gap-4 justify-center xl:flex-col xl:gap-8">
          {techIds.map((id) => (
            <button
              key={id}
              onClick={() => setActiveIndex(id)}
              className={clsx(
                "font-serif w-10 h-10 rounded-full outline-1 outline outline-solid transition-colors duration-150 md:text-2xl md:w-14 md:h-14 xl:w-20 xl:h-20 xl:text-3xl",
                activeIndex === id
                  ? "bg-white outline-white"
                  : "outline-white/25 text-white",
              )}
            >
              {id}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 xl:gap-6">
          <div className="flex flex-col-reverse gap-4">
            <h2 className="font-serif text-center text-2xl text-white md:text-5xl xl:text-left xl:text-6xl">
              {techExplanations[activeIndex - 1].name}
            </h2>

            <span className="font-serif text-lg text-center text-white/50 md:text-2xl xl:text-left">
              THE TERMINOLOGY..
            </span>
          </div>

          <p className="text-center font-sans text-blue-300 leading-7 text-base xl:text-left">
            {techExplanations[activeIndex - 1].description}
          </p>
        </div>
      </div>
    </div>
  );
}
