import React from "react";
import { render } from "../test-utils";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Daniel Nascimento</p>
    </Hero>
  );
  ("");

  expect(getByText("Daniel Nascimento")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";

  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image
  });
});
