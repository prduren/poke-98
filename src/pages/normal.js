import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { TypeCardWrapper } from "../styles/style";

const names = [
  {
    name: "pidgey",
    url: "https://pokeapi.co/api/v2/pokemon/16",
  },
  {
    name: "pidgeotto",
    url: "https://pokeapi.co/api/v2/pokemon/17",
  },
  {
    name: "pidgeot",
    url: "https://pokeapi.co/api/v2/pokemon/18",
  },
  {
    name: "rattata",
    url: "https://pokeapi.co/api/v2/pokemon/19",
  },
  {
    name: "raticate",
    url: "https://pokeapi.co/api/v2/pokemon/20",
  },
  {
    name: "spearow",
    url: "https://pokeapi.co/api/v2/pokemon/21",
  },
  {
    name: "fearow",
    url: "https://pokeapi.co/api/v2/pokemon/22",
  },
  {
    name: "jigglypuff",
    url: "https://pokeapi.co/api/v2/pokemon/39",
  },
  {
    name: "wigglytuff",
    url: "https://pokeapi.co/api/v2/pokemon/40",
  },
  {
    name: "meowth",
    url: "https://pokeapi.co/api/v2/pokemon/52",
  },
  {
    name: "persian",
    url: "https://pokeapi.co/api/v2/pokemon/53",
  },
  {
    name: "farfetchd",
    url: "https://pokeapi.co/api/v2/pokemon/83",
  },
  {
    name: "doduo",
    url: "https://pokeapi.co/api/v2/pokemon/84",
  },
  {
    name: "dodrio",
    url: "https://pokeapi.co/api/v2/pokemon/85",
  },
  {
    name: "lickitung",
    url: "https://pokeapi.co/api/v2/pokemon/108",
  },
  {
    name: "chansey",
    url: "https://pokeapi.co/api/v2/pokemon/113",
  },
  {
    name: "kangaskhan",
    url: "https://pokeapi.co/api/v2/pokemon/115",
  },
  {
    name: "tauros",
    url: "https://pokeapi.co/api/v2/pokemon/128",
  },
  {
    name: "ditto",
    url: "https://pokeapi.co/api/v2/pokemon/132",
  },
  {
    name: "eevee",
    url: "https://pokeapi.co/api/v2/pokemon/133",
  },
  {
    name: "porygon",
    url: "https://pokeapi.co/api/v2/pokemon/137",
  },
  {
    name: "snorlax",
    url: "https://pokeapi.co/api/v2/pokemon/143",
  },
];

const requestOne = axios.get(names[0].url);
const requestTwo = axios.get(names[1].url);
const requestThree = axios.get(names[2].url);
const requestFour = axios.get(names[3].url);
const requestFive = axios.get(names[4].url);
const requestSix = axios.get(names[5].url);
const requestSeven = axios.get(names[6].url);
const requestEight = axios.get(names[7].url);
const requestNine = axios.get(names[8].url);
const requestTen = axios.get(names[9].url);
const requestEleven = axios.get(names[10].url);
const requestTwelve = axios.get(names[11].url);
const requestThirteen = axios.get(names[12].url);
const requestFourteen = axios.get(names[13].url);
const requestFifteen = axios.get(names[14].url);
const requestSixteen = axios.get(names[15].url);
const requestSeventeen = axios.get(names[16].url);
const requestEighteen = axios.get(names[17].url);
const requestNineteen = axios.get(names[18].url);
const requestTwenty = axios.get(names[19].url);
const requestTwentyOne = axios.get(names[20].url);
const requestTwentyTwo = axios.get(names[21].url);

function NormalPage() {
  const [pokemon, setPokemon] = useState([]);
  const [sprites, setSprites] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/1/")
      .then((response) => {
        setPokemon(response.data.pokemon.slice(0, 22));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .all([
        requestOne,
        requestTwo,
        requestThree,
        requestFour,
        requestFive,
        requestSix,
        requestSeven,
        requestEight,
        requestNine,
        requestTen,
        requestEleven,
        requestTwelve,
        requestThirteen,
        requestFourteen,
        requestFifteen,
        requestSixteen,
        requestSeventeen,
        requestEighteen,
        requestNineteen,
        requestTwenty,
        requestTwentyOne,
        requestTwentyTwo,
      ])
      .then(
        axios.spread((...responses) => {
          // const responseOne = responses[0];
          // const responseTwo = responses[1];
          // const responseThree = responses[2];
          console.log("responses", responses);
          setSprites(responses.map((obj) => obj.data.sprites.front_default));
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const nameArray = names.map((name) => {
    return name.name;
  });
  console.log("nameArray: ", nameArray);
  return (
    <Route path="/normal">
      <div>
        {sprites.map((sprite) => {
          console.log("sprite: ", sprite);
          return (
            <TypeCardWrapper>
              <img src={sprite} alt="sprite" />
              <h3>name</h3>
            </TypeCardWrapper>
          );
        })}
      </div>
    </Route>
  );
}

export default NormalPage;
