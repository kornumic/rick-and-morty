import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useHttp from "../hooks/use-http";
import { RM_API } from "../constants/fe-urls";
import LocationInfo, { Location } from "../components/location/LocationInfo";

const LocationDetail = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [loadedLocation, setLoadedLocation] = useState<Location>();
  const url = RM_API + "/location/" + useParams().locationId;

  useEffect(() => {
    async function fetchLocation(data: any) {
      const location: Location = data;
      setLoadedLocation(location);
    }

    sendRequest({ url: url }, fetchLocation).then();
  }, [sendRequest, url]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {!isLoading && !error && loadedLocation && (
        <div>
          <LocationInfo location={loadedLocation} />
        </div>
      )}
    </>
  );
};

export default LocationDetail;
