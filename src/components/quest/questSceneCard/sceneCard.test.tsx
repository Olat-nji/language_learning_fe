import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import QuestSceneCard from ".";
import { vi } from "vitest";

const setScreenSize = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("blog Card Template", () => {
  const cardProperties = {
    title: "Catch the flight",
    points: 400,
    description: "lorem ipsum dolor sit ammet lorem ipsum",
    stage: 2,
    levels: 4,
  };
  describe("responsiveComponent", () => {
    beforeEach(() => {
      vi.resetModules();
    });

    it("renders correctly on mobile screens", () => {
      expect.assertions(2);
      setScreenSize(375);
      render(<QuestSceneCard {...cardProperties} />);
      const mobileElement = screen.getByTestId("mobile-element");
      expect(mobileElement).toBeInTheDocument();
      expect(mobileElement).toBeVisible();
    });
  });

  describe("page tests", () => {
    it("navbar renders", () => {
      expect.assertions(1);

      const view = render(<QuestSceneCard {...cardProperties} />);

      expect(view.baseElement).toBeInTheDocument();
    });
  });
});
