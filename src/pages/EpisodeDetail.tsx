import React, { useEffect, useState } from "react";
import EpisodeInfo, { Episode } from "../components/episode/EpisodeInfo";
import { useParams } from "react-router";
import useHttp from "../hooks/use-http";
import EpisodeItem from "../components/episode/EpisodeItem";

const EpisodeDetail = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [loadedEpisode, setLoadedEpisode] = useState<Episode>();
  const url = "rickandmortyapi.com/api/episode/" + useParams().episodeId;

  useEffect(() => {
    const fetchEpisode = (data: any) => {
      const episode: Episode = data;
      setLoadedEpisode(episode);
    };

    sendRequest({ url: url }, fetchEpisode).then();
  }, [sendRequest]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {!isLoading && !error && loadedEpisode && (
        <div>
          <p>{loadedEpisode.id}</p>
        </div>
      )}
    </>
  );
};

export default EpisodeDetail;
