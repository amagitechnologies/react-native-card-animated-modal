/* eslint react/prop-types : off */
/* eslint no-unused-vars : off */
import React from "react";

import { Dimensions } from "react-native";

import CreativeCard from "./components/CreativeCard";
import IGCard from "./components/IGCard";
import FitnessCard from "./components/FitnessCard";
import GameCard from "./components/GameCard";

import CreativeImage from "./assets/creative";
import IGImage from "./assets/ig_image";
import FitnessImage from "./assets/fitness_image";
import GameImage from "./assets/game_image";

const { height } = Dimensions.get("window");

export default [
  {
    image: {
      uri: CreativeImage
    },
    height: height * 0.7,
    renderItem: ({ item }) => <CreativeCard />
  },
  {
    image: {
      uri: IGImage
    },
    renderItem: ({ item }) => <IGCard />
  },
  {
    image: {
      uri: FitnessImage
    },
    renderItem: ({ item }) => <FitnessCard />
  },
  {
    image: {
      uri: GameImage
    },
    height: height * 0.8,
    renderItem: ({ item }) => <GameCard />
  }
];
