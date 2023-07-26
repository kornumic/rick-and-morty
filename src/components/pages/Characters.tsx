import { Character, CharacterLocation } from "../character/CharacterInfo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { json } from "react-router";

const DUMMY_CHARACTERS: Character[] = [
  {
    id: 1,
    name: "Rick",
    status: "Alive",
    species: "Human",
    type: "genius",
    gender: "male",
    origin: undefined,
    location: undefined,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2Farticle%2Frick-and-morty-justin-roiland-recast.html&psig=AOvVaw3jClq4v3WrlLAvPz3rKyI0&ust=1690468686713000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCFv97MrIADFQAAAAAdAAAAABAE",
    episode: [],
    url: "",
    created: "yes",
  },
  {
    id: 2,
    name: "Morty",
    status: "Alive",
    species: "Human",
    type: "dumb",
    gender: "male",
    origin: undefined,
    location: undefined,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Frickandmorty.fandom.com%2Fwiki%2FMorty_Smith&psig=AOvVaw3xN59JKeOAGFhhXC5XZIOQ&ust=1690468988154000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICZiu7NrIADFQAAAAAdAAAAABAE",
    episode: [],
    url: "",
    created: "yes",
  },
];
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

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {isLoading && !error && <p>Loading...</p>}
      {error && !isLoading && <p>Unexpected error</p>}
      {!error && !isLoading && (
        <ul>
          {fetchedCharacters.map((character) => {
            return (
              <li key={character.id}>
                <Link to={`${character.id}`}>{character.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CharactersPage;
