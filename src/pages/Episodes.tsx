import React, { useEffect, useState } from "react";
import { PageList } from "./Characters";
import { Episode } from "../components/episode/EpisodeInfo";
import useUrlState from "@ahooksjs/use-url-state";
import useHttp from "../hooks/use-http";
import PagesChanger from "../components/layout/PagesChanger";
import EpisodeItem from "../components/episode/EpisodeItem";
import { Link } from "react-router-dom";

const EpisodesPage = () => {
  const [fetchedEpisodes, setFetchedEpisodes] = useState<Episode[]>([]);
  const [pages, setPages] = useState<PageList>({ prev: false, next: false });
  const [currentPage, setCurrentPage] = useUrlState({ page: 1 });
  const episodesUrl = "https://rickandmortyapi.com/api/episode";

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    async function applyData(data: any) {
      const episodes: Episode[] = data.results;
      const pages: PageList = {
        prev: !!data.info.prev,
        next: !!data.info.next,
      };
      setFetchedEpisodes(episodes);
      setPages(pages);
    }

    sendRequest(
      { url: episodesUrl + "/?page=" + currentPage.page.toString() },
      applyData,
    ).then();
  }, [sendRequest, currentPage]);

  const pageButtonHandler = (move: number) => {
    if (move === -1 && pages.prev) {
      setCurrentPage({ page: +currentPage.page + move });
    } else if (move === 1 && pages.next) {
      setCurrentPage({ page: +currentPage.page + move });
    } else {
      throw new Error("Page is not defined");
    }
  };

  return (
    <>
      {isLoading && !error && <p className="transition-all">Loading...</p>}
      {error && !isLoading && <p>Unexpected error</p>}
      {!error && !isLoading && (
        <div className="my-6 mx-64">
          <PagesChanger
            pages={pages}
            prevButtonHandler={pageButtonHandler.bind(null, -1)}
            nextButtonHandler={pageButtonHandler.bind(null, 1)}
          />
          <ul className="grid grid-cols-4  ">
            {fetchedEpisodes.map((episode) => {
              return (
                <li key={episode.id}>
                  <Link to={`${episode.id}`}>
                    <EpisodeItem episode={episode} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <PagesChanger
            pages={pages}
            prevButtonHandler={pageButtonHandler.bind(null, -1)}
            nextButtonHandler={pageButtonHandler.bind(null, 1)}
          />
        </div>
      )}
    </>
  );
};

export default EpisodesPage;
