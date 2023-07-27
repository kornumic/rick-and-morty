import { Character } from "../character/CharacterInfo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterItem from "../character/CharacterItem";

const CharactersPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fetchedCharacters, setFetchedCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchCharacters() {
      setIsLoading(true);

      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        setError(true);
      } else {
        const responseJson = await response.json();
        const results: Character[] = responseJson.results;
        setFetchedCharacters(results);
      }

      setIsLoading(false);
    }

    fetchCharacters().then(() => {});
  }, []);

  return (
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
  );
};

export default CharactersPage;
