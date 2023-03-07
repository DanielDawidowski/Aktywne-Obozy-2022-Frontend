import MountainIcon from "../assets/SVG/Mountain/Mountain";
import KayakIcon from "../assets/SVG/Kayaks/Kayaks";
import CrabIcon from "../assets/SVG/Crab/Crab";

const iconsArray = [
  {
    typeEvent: "gory",
    src: <MountainIcon />,
  },
  {
    typeEvent: "splywy",
    src: <KayakIcon />,
  },
  {
    typeEvent: "morze",
    src: <CrabIcon />,
  },
];

export const showIcon = (typeEvent) => {
  for (let i = 0; i < iconsArray.length; i++) {
    if (typeEvent === iconsArray[i].typeEvent) return iconsArray[i].src;
  }
};

export const showDate = (date) => {
  let year = date && date.substring(0, 4);
  let mounth = date && date.substring(5, 7);
  let day = date && date.substring(8, 10);
  // let d = date && date.replaceAll("-", " ");

  return `${day} ${mounth} ${year}`;
};
