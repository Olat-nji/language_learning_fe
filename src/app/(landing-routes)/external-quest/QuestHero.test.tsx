import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { quests } from "./data";
import QuestHero from "./QuestHero";

describe("questHero Component", () => {
  beforeEach(() => {
    render(<QuestHero />);
  });

  it("should render the section with correct styling", () => {
    const section = screen.getByRole("region");
    expect(section).toHaveClass(
      "mt-12 w-full bg-secondary-100 p-4 sm:p-6 md:p-10",
    );
    expect(section).toHaveStyle({ fontFamily: "Axiforma" });
  });

  it("should render the heading with correct text and styling", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Explore Language Quests");
    expect(heading).toHaveClass(
      "text-secondary-200 mb-8 pt-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl",
    );
  });

  it("should render the correct number of QuestCard components", () => {
    const questCards = screen.getAllByTestId("quest-card");
    expect(questCards).toHaveLength(quests.length);
  });

  it("should render each QuestCard with correct props", () => {
    for (const quest of quests) {
      const questCard = screen.getByText(quest.title);
      expect(questCard).toBeInTheDocument();
    }
  });
});
