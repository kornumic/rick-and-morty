import CharacterInfo, {
  Character,
} from "../components/character/CharacterInfo";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import { RM_API } from "../constants/fe-urls";

const CharacterDetail = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [loadedCharacter, setLoadedCharacter] = useState<Character>();
  const url = RM_API + "/character/" + useParams().characterId;

  useEffect(() => {
    async function apply(data: any) {
      const character: Character = data;
      setLoadedCharacter(character);
    }

    sendRequest({ url: url }, apply).then();
  }, [sendRequest, url]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Loading...</p>}
      {!isLoading && !error && loadedCharacter && (
        <CharacterInfo character={loadedCharacter} />
      )}
    </>
  );
};

export default CharacterDetail;
