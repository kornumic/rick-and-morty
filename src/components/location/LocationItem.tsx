import React from "react";
import { Location } from "./LocationInfo";
import { LOCATION_EXTRA } from "../../move-to-be/location-extra";

const mapTypeToShort = (name: string) => {
  for (const i of LOCATION_EXTRA.types) {
    if (name === i.type) {
      return i.short;
    }
  }
  return "other";
};

const LocationItem: React.FC<{ location: Location }> = ({ location }) => {
  const short = mapTypeToShort(location.type);

  return (
    <div className="flex grid-cols-3 rounded-2xl items-top bg-[#181818] hover:bg-[#303030] border-white transition-all my-3 p-2">
      <div className="text-left mx-4 w-full ">
        <h1 className="py-4 w-full text-white text-2xl truncate">
          {location.name}
        </h1>
        <p>{short}</p>
      </div>
    </div>
  );
};

export default LocationItem;
