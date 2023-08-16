import React from "react";

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

const LocationInfo: React.FC<{ location: Location }> = ({ location }) => {
  return <div>{location.id}</div>;
};

export default LocationInfo;
