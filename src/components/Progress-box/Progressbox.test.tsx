import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ProgressBox from "./Progressbox";

import "@testing-library/jest-dom";

describe("progressBox", () => {
  it("renders the default state correctly", () => {
    expect.assertions(2);

    render(<ProgressBox level={1} progressStarted={false} progress={0} />);
    expect(screen.getByAltText("profile icon")).toBeInTheDocument();
    expect(screen.getByText("The Burning building")).toBeInTheDocument();
  });

  it("renders the progress state correctly", () => {
    expect.assertions(1);

    render(<ProgressBox level={5} progressStarted={true} progress={50} />);

    expect(screen.getByText("Lvl 5")).toBeInTheDocument();
  });
});
