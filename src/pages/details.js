import React from "react";
import { useParams } from "react-router-dom";
export default function PokemonDetailsPage() {
  const { id } = useParams(); // { type: string, name: string}

  return <div>{id}</div>;
}
