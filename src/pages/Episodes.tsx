import { Episode } from "../components/episode/EpisodeInfo";
import PagesChanger from "../components/layout/PagesChanger";
import EpisodeItem from "../components/episode/EpisodeItem";
import useEntityList from "../hooks/use-entity-list";

const EpisodesPage = () => {
  const {
    fetchedEntities: fetchedEpisodes,
    pages,
    isLoading,
    error,
    pageButtonHandler,
  } = useEntityList<Episode>("/episode");

  return (
    <>
      {isLoading && !error && <p className="transition-all">Loading...</p>}
      {error && !isLoading && <p>Unexpected error</p>}
      {!error && !isLoading && (
        <div className="my-6 mx-64">
          <div className="m-4">
            <PagesChanger
              pages={pages}
              prevButtonHandler={pageButtonHandler.bind(null, -1)}
              nextButtonHandler={pageButtonHandler.bind(null, 1)}
            />
          </div>

          <ul className="grid grid-cols-2">
            {fetchedEpisodes.map((episode) => {
              return (
                <li key={episode.id}>
                  <EpisodeItem episode={episode} to={`${episode.id}`} />
                </li>
              );
            })}
          </ul>

          <div className="m-4">
            <PagesChanger
              pages={pages}
              prevButtonHandler={pageButtonHandler.bind(null, -1)}
              nextButtonHandler={pageButtonHandler.bind(null, 1)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EpisodesPage;
