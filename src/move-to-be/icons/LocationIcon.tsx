import React from "react";
import { TailwindClass } from "../../types/tailwind-types";

export const urlByShortType = (short: string) => {
  let url: string;
  switch (short) {
    case "building":
      url = "https://images6.alphacoders.com/633/thumb-1920-633232.jpg";
      break;
    case "space":
      url = "https://i.imgur.com/d3a3Qxb.jpg";
      break;
    case "vehicle":
      url =
        "https://www.wallpaperflare.com/static/618/113/79/rick-and-morty-adult-swim-cartoon-gray-wallpaper-preview.jpg";
      break;
    case "planet":
      url =
        "https://w.forfun.com/fetch/c2/c2b6edab1f503d3eb2345e3fd33b8fec.jpeg";
      break;
    case "multiverse":
      url =
        "https://e1.pxfuel.com/desktop-wallpaper/409/426/desktop-wallpaper-rick-and-morty-portal-transparent-rick-and-morty-portal-rick-and-morty-portal.jpg";
      break;
    case "person":
      url =
        "https://basementrejects.com/wp-content/uploads/2018/08/rick-and-morty-season-3-5-the-whirly-dirty-conspiracy-skinless-summer-review-episode-guide-list.jpg";
      break;
    default:
      url =
        "https://thoughtcatalog.com/wp-content/uploads/2017/11/rick-sanchez-and-morty-adult-swim.jpg";
  }
  console.log(url);
  return url;
};

export const LocationIcon: React.FC<{
  shortType: string;
  className?: TailwindClass;
}> = ({ shortType, className }) => {
  return (
    <div className={className}>
      <img
        className="rounded-full object-cover h-40 w-40 hover:h-52 hover:w-52  transition-all"
        src={urlByShortType(shortType)}
        alt={shortType}
      />
    </div>
  );
};
