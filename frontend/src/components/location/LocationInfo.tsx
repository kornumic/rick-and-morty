import React from "react";

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
  starred: boolean | undefined;
};

const LocationInfo: React.FC<{
  location: Location;
}> = ({ location }) => {
  return (
    <>
      <div>{location.id}</div>
      <div>{location.name}</div>
    </>
  );
};

export default LocationInfo;
