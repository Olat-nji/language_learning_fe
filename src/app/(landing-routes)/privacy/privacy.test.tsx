// privacy.test.tsx
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import termsOfUse from "./data";
import PrivacyPolicy from "./page"; // Ensure the correct import path

describe("privacyPolicy component", () => {
  it("should render PrivacyPolicy component correctly", () => {
    expect.hasAssertions();

    render(<PrivacyPolicy />);

    // Check if the main heading is rendered
    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toHaveTextContent("Privacy Policy");

    // Check if the last updated date is rendered
    const lastUpdated = screen.getByText(/Last updated:/);
    expect(lastUpdated).toHaveTextContent("04 August, 2024");

    // Check if terms of use are rendered
    for (const item of termsOfUse) {
      const textElement = screen.getByText(item.text);
      expect(textElement).toBeInTheDocument();

      const subBodyHeaders = item.subBody?.map((sub) => sub.header) || [];
      const subBodyListItems =
        item.subBody?.flatMap((sub) =>
          sub.listArray.map((listItem) => ({
            topic: listItem.topic,
            topicText: listItem.topicText,
          })),
        ) || [];

      for (const header of subBodyHeaders) {
        const subHeader = screen.getByText(header);
        expect(subHeader).toBeInTheDocument();
      }

      for (const listItem of subBodyListItems) {
        const topicElement = screen.getByText(listItem.topic);
        expect(topicElement).toBeInTheDocument();
        const topicTextElement = screen.getByText(listItem.topicText);
        expect(topicTextElement).toBeInTheDocument();
      }
    }
  });
});
