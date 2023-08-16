import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useHttp from "../hooks/use-http";
import { Episode } from "../components/episode/EpisodeInfo";
import { RM_API } from "../constants/fe-urls";

const LocationDetail = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [loadedLocation, setLoadedLocation] = useState<Episode>();
  const url = RM_API + "/location/" + useParams().locationId;

  useEffect(() => {
    async function fetchEpisode(data: any) {
      const episode: Episode = data;
      setLoadedLocation(episode);
    }

    sendRequest({ url: url }, fetchEpisode).then();
  }, [sendRequest, url]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {!isLoading && !error && loadedLocation && (
        <div>
          <p>{loadedLocation.id}</p>
        </div>
      )}
    </>
  );
};

export default LocationDetail;
