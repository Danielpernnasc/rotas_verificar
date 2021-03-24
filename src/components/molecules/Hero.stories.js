import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgHighwayImage from "../../stories/assets/road-220058_1280.jpg";
import BgCarImage from "../../stories/assets/buildings-1851246_1920.jpg";
import Heading from "../atoms/Heading";
import Button from "../atoms//Button";

export default {
  title: "Components/Molecules/Hero",
  component: Hero
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("Text", "A auto escola lider em aprovação.")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br />
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
    <Button color="primary" variant="outlined">
      Matricule-se agora
    </Button>
  </Hero>
);
