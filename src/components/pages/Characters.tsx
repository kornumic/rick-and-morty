import { Character } from "../character/CharacterInfo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterItem from "../character/CharacterItem";
import PagesChanger from "../layout/PagesChanger";

export type PageList = {
  prev: string | null;
  next: string | null;
};

const CharactersPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fetchedCharacters, setFetchedCharacters] = useState<Character[]>([]);
  const [pages, setPages] = useState<PageList>({ prev: null, next: null });
  const [currentPage, setCurrentPage] = useState<string>(
    "https://rickandmortyapi.com/api/character",
  );

  useEffect(() => {
    async function fetchCharacters() {
      setIsLoading(true);

      const response = await fetch(currentPage);
      if (!response.ok) {
        setError(true);
      } else {
        const responseJson = await response.json();
        const characters: Character[] = responseJson.results;
        const pages: PageList = {
          prev: responseJson.info.prev,
          next: responseJson.info.next,
        };
        setFetchedCharacters(characters);
        setPages(pages);
      }

      setIsLoading(false);
    }

    fetchCharacters().then(() => {});
  }, [currentPage]);

  const prevButtonHandler = () => {
    if (pages.prev) {
      setCurrentPage(pages.prev);
    } else {
      throw new Error("Previous page is not defined");
    }
  };

  const nextButtonHandler = () => {
    if (pages.next) {
      setCurrentPage(pages.next);
    } else {
      throw new Error("Next page is not defined");
    }
  };

  return (
    <>
      <PagesChanger
        pages={pages}
        prevButtonHandler={prevButtonHandler}
        nextButtonHandler={nextButtonHandler}
      />
      <div>
        {isLoading && !error && <p>Loading...</p>}
        {error && !isLoading && <p>Unexpected error</p>}
        {!error && !isLoading && (
          <ul className="flex-col">
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
        )}
      </div>
    </>
  );
};

export default CharactersPage;
