import { Character } from "../components/character/CharacterInfo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterItem from "../components/character/CharacterItem";
import PagesChanger from "../components/layout/PagesChanger";
import useHttp from "../hooks/use-http";
import useUrlState from "@ahooksjs/use-url-state";

export type PageList = {
  prev: boolean;
  next: boolean;
};

const CharactersPage = () => {
  const [fetchedCharacters, setFetchedCharacters] = useState<Character[]>([]);
  const [pages, setPages] = useState<PageList>({ prev: false, next: false });
  const [currentPage, setCurrentPage] = useUrlState({ page: 1 });
  const charactersUrl = "https://rickandmortyapi.com/api/character";

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    async function applyData(data: any) {
      const characters: Character[] = data.results;
      const pages: PageList = {
        prev: !!data.info.prev,
        next: !!data.info.next,
      };
      setFetchedCharacters(characters);
      setPages(pages);
    }

    sendRequest(
      { url: charactersUrl + "/?page=" + currentPage.page.toString() },
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
        <div className="my-6">
          <PagesChanger
            pages={pages}
            prevButtonHandler={pageButtonHandler.bind(null, -1)}
            nextButtonHandler={pageButtonHandler.bind(null, 1)}
          />
          <ul className="flex-col my-12">
            {fetchedCharacters.map((character) => {
              return (
                <li className="text-center" key={character.id}>
                  <Link to={`${character.id}`}>
                    <CharacterItem character={character} />
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

export default CharactersPage;
