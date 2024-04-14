import * as brandsIcons from "@fortawesome/free-brands-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";

const iconReg = /^fa[A-Z0-9].*/;

const getIcons = (iconsModule) => {
  return Object.entries(iconsModule)
    .filter(([key]) => iconReg.test(key))
    .map(([item, value]) => value);
};

const icons = [
  ...getIcons(regularIcons),
  ...getIcons(solidIcons),
  ...getIcons(brandsIcons),
];

export const getRandomIcon = () =>
  icons[Math.floor(Math.random() * icons.length)];
