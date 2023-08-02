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

  const prevButtonHandler = () => {
    if (pages.prev) {
      setCurrentPage({ page: +currentPage.page - 1 });
    } else {
      throw new Error("Previous page is not defined");
    }
  };

  const nextButtonHandler = () => {
    if (pages.next) {
      setCurrentPage({ page: +currentPage.page + 1 });
    } else {
      throw new Error("Next page is not defined");
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
            prevButtonHandler={prevButtonHandler}
            nextButtonHandler={nextButtonHandler}
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
            prevButtonHandler={prevButtonHandler}
            nextButtonHandler={nextButtonHandler}
          />
        </div>
      )}
    </>
  );
};

export default CharactersPage;
