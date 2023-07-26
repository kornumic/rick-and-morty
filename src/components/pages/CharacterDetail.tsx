import CharacterInfo from "../character/CharacterInfo";
import { useParams } from "react-router";

const CharacterDetail = () => {
  const params = useParams();
  const characterId = params.characterId!;
  return (
    <>
      <CharacterInfo characterId={characterId} />
    </>
  );
};

export default CharacterDetail;
