import CharacterInfo, { Character } from "../character/CharacterInfo";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const CharacterDetail = () => {
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const characterId = params.characterId!;
  const [loadedCharacter, setLoadedCharacter] = useState<Character>();
  useEffect(() => {
    async function fetchCharacter() {
      setIsLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${characterId}`,
      );
      const character: Character = await response.json();
      setLoadedCharacter(character);
      setIsLoading(false);
    }

    fetchCharacter().then(() => {});
  }, [characterId]);
  return (
    <>
      {!isLoading && loadedCharacter && (
        <CharacterInfo character={loadedCharacter} />
      )}
    </>
  );
};

export default CharacterDetail;
