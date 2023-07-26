import React, { useEffect, useState } from "react";

export type CharacterLocation = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation | undefined;
  location: CharacterLocation | undefined;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

const CharacterInfo: React.FC<{ characterId: string }> = ({ characterId }) => {
  return (
    <>
      <p>{characterId}</p>
    </>
  );
};

export default CharacterInfo;
