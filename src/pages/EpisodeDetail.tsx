import React, { useEffect, useState } from "react";
import EpisodeInfo, { Episode } from "../components/episode/EpisodeInfo";
import { useParams } from "react-router";
import useHttp from "../hooks/use-http";
import { RM_API } from "../constants/fe-urls";
import LocationInfo from "../components/location/LocationInfo";

const EpisodeDetail = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [loadedEpisode, setLoadedEpisode] = useState<Episode>();
  const url = RM_API + "/episode/" + useParams().episodeId;

  useEffect(() => {
    async function fetchEpisode(data: any) {
      const episode: Episode = data;
      setLoadedEpisode(episode);
    }

    sendRequest({ url: url }, fetchEpisode).then();
  }, [sendRequest, url]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {!isLoading && !error && loadedEpisode && (
        <div>
          <EpisodeInfo episode={loadedEpisode} />
        </div>
      )}
    </>
  );
};

export default EpisodeDetail;
