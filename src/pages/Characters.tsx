import { Character } from "../components/character/CharacterInfo";
import CharacterItem from "../components/character/CharacterItem";
import PagesChanger from "../components/layout/PagesChanger";
import useEntityList from "../hooks/use-entity-list";

export type PageList = {
  prev: boolean;
  next: boolean;
};

const CharactersPage = () => {
  const prettyOn = false;
  const {
    fetchedEntities: fetchedCharacters,
    pages,
    isLoading,
    error,
    pageButtonHandler,
  } = useEntityList<Character>("/character");

  return (
    <div
      className={
        prettyOn
          ? "bg-fixed bg-cover bg-[url(https://pixelz.cc/wp-content/uploads/2018/08/rick-and-morty-characters-uhd-4k-wallpaper.jpg)]"
          : ""
      }
    >
      {isLoading && !error && <p className="transition-all">Loading...</p>}
      {error && !isLoading && <p>Unexpected error</p>}
      {!error && !isLoading && (
        <div className="py-6 mx-96">
          <PagesChanger
            pages={pages}
            prevButtonHandler={pageButtonHandler.bind(null, -1)}
            nextButtonHandler={pageButtonHandler.bind(null, 1)}
          />
          <ul className="flex-col my-12">
            {fetchedCharacters.map((character) => {
              return (
                <li className="text-center" key={character.id}>
                  <CharacterItem character={character} to={`${character.id}`} />
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
    </div>
  );
};

export default CharactersPage;
