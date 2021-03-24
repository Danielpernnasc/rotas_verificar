import React from "react";

import Card, { CardBody, CardMedia } from "./Card";
import Section from "../molecules/Section";

import Heading from "./Heading";
import Button from "./Button";
import PlaceholderImage from "../../stories/assets/imagepraup.png";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia }
};
export const usage = () => (
  <Section>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum
          ea labore. Minima totam.
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section>
    <Card>
      <CardMedia image={PlaceholderImage} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum
          ea labore. Minima totam.
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);



