import { Character } from "../components/character/CharacterInfo";
import { Link } from "react-router-dom";
import CharacterItem from "../components/character/CharacterItem";
import PagesChanger from "../components/layout/PagesChanger";
import useEntityList from "../hooks/use-entity-list";

export type PageList = {
  prev: boolean;
  next: boolean;
};

const CharactersPage = () => {
  const {
    fetchedEntities: fetchedCharacters,
    pages,
    isLoading,
    error,
    pageButtonHandler,
  } = useEntityList<Character>("/character");

  return (
    <>
      {isLoading && !error && <p className="transition-all">Loading...</p>}
      {error && !isLoading && <p>Unexpected error</p>}
      {!error && !isLoading && (
        <div className="my-6  mx-96">
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
