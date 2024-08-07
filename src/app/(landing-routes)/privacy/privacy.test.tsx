// PrivacyPolicy.test.tsx
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import termsOfUse from "~/components/privacyPolicy/data";

describe("privacyPolicy component", () => {
  it("should render PrivacyPolicy component correctly", () => {
    render(<PrivacyPolicy />);

    // Check if the main heading is rendered
    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toHaveTextContent("Privacy Policy");

    // Check if the last updated date is rendered
    const lastUpdated = screen.getByText(/Last updated:/);
    expect(lastUpdated).toHaveTextContent("04 August, 2024");

    // Check if terms of use are rendered
    for (const item of termsOfUse) {
      expect(screen.getByText(item.text)).toBeInTheDocument();
      if (item.subBody)
        for (const sub of item.subBody) {
          expect(screen.getByText(sub.header)).toBeInTheDocument();
          if (sub.listArray)
            for (const listItem of sub.listArray) {
              expect(screen.getByText(listItem.topic)).toBeInTheDocument();
              expect(screen.getByText(listItem.topicText)).toBeInTheDocument();
            }
        }
    }

    // Check if Footer is rendered
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
