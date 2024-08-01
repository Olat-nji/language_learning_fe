import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ProgressBox from "./Progressbox";

import "@testing-library/jest-dom";

describe("ProgressBox", () => {
  it('renders the default state correctly', () => {
    const { getByText, getByAltText } = render(
      <ProgressBox level={1} progressStarted={false} progress={0} />
    );

    expect(getByAltText('profile icon')).toBeInTheDocument();
    expect(getByText('The Burning building')).toBeInTheDocument();
  });

  it('renders the progress state correctly', () => {
    const { getByText } = render(
      <ProgressBox level={5} progressStarted={true} progress={50} />
    );

    expect(getByText('Lvl 5')).toBeInTheDocument();
  });

  it('renders VolumeBar with correct value', () => {
    const { getByRole } = render(
      <ProgressBox level={3} progressStarted={true} progress={30} />
    );

    const input = getByRole('slider');
    expect(input).toHaveValue(30);
  });
});
