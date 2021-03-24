import React from "react";
import { render, screen } from "../../test-utils";

import Accordion from "./Accordion";
import { fireEvent } from "@testing-library/dom";

const title = "My title";
const text = "My children text";

test("render the title", () => {
  render(<Accordion title={title}></Accordion>);
  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders without children", () => {
  render(<Accordion></Accordion>);
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("triggers onChange when it is clicked", async () => {
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange}></Accordion>);

  await fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalledTimes(1);
});

describe("when is controlled", () => {
  describe("when starts opened", () => {
    test("renders with children", () => {
      render(<Accordion open>{text}</Accordion>);
      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test("triggers onChange when it is clicked", async () => {
      const handleChange = jest.fn();
      const { rerender } = render(
        <Accordion title={title} onChange={handleChange} open />
      );

      await fireEvent.click(screen.getByText(title));

      expect(handleChange).toBeCalledTimes(1);
    });

    test("hide children when open changes to false", () => {
      const { rerender } = render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );

      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>
      );

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
    test("called default function when it is clicked", async () => {
      render(<Accordion title={title} open />);
      await fireEvent.click(screen.getByText(title));
    });
  });

  describe("when starts opened", () => {
    test("renders without children", () => {
      render(<Accordion open={false}>{text}</Accordion>);
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
