import { Character, CharacterLocation } from "../character/CharacterInfo";
import { Link } from "react-router-dom";

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
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {DUMMY_CHARACTERS.map((character) => {
          return (
            <li key={character.id}>
              <Link to={`${character.id}`}>{character.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharactersPage;
