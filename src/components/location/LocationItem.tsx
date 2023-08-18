import React, { useState } from "react";
import { Location } from "./LocationInfo";
import { LOCATION_EXTRA } from "../../move-to-be/location-extra";
import { LocationIcon } from "../../move-to-be/icons/LocationIcon";
import StarIcon from "../layout/StarIcon";
import { useNavigate } from "react-router";

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
  to?: string;
}> = ({ location, to }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(!!location.starred);
  const short = mapTypeToShort(location.type);

  const onNavigate = () => {
    if (to) {
      navigate(to);
    }
  };

  const onChangeFavorite = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    location.starred = !location.starred;
    setIsFavorite(location.starred);
    //TODO - save favorites to BE
  };

  return (
    <div
      onClick={onNavigate}
      className="flex flex-row justify-center rounded-2xl m-4 bg-[#181818] hover:bg-[#303030] transition-all items-center"
    >
      <div className="flex flex-col text-center items-center h-72">
        <div className="flex flex-row-1 w-fit items-center">
          <h1 className="py-4 w-40 h-16 text-white text-center text-2xl font-thin truncate">
            {location.name}
          </h1>
          <StarIcon starred={isFavorite} onChangeFavorite={onChangeFavorite} />
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center m-2">
          <LocationIcon shortType={short} className="" />
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
