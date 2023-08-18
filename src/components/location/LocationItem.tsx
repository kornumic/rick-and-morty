import React from "react";
import { Location } from "./LocationInfo";
import { LOCATION_EXTRA } from "../../move-to-be/location-extra";
import { LocationIcon } from "../../move-to-be/icons/LocationIcon";

const mapTypeToShort = (name: string) => {
  for (const i of LOCATION_EXTRA.types) {
    if (name === i.type) {
      return i.short;
    }
  }
  return "other";
};

const LocationItem: React.FC<{
  location: Location;
}> = ({ location }) => {
  const short = mapTypeToShort(location.type);

  return (
    <div className="flex flex-row justify-center rounded-2xl m-4 bg-[#181818] hover:bg-[#303030] transition-all items-center">
      <div className="flex flex-col text-center items-center h-72">
        <div className="flex-row w-full items-cente ">
          <h1 className="py-4 w-56 h-12 text-white text-center text-2xl font-thin truncate">
            {location.name}
          </h1>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center m-2">
          <LocationIcon shortType={short} className="" />
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
