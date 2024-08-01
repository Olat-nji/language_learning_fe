/* eslint-disable @next/next/no-img-element */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import QuestLearningNow from "./questLearningNow";

vi.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => {
    return <img src={src} alt={alt} width={width} height={height} />;
  },
}));

const mockQuests = [
  {
    image: "/path/to/image1.jpg",
    nameOfQuest: "Quest 1",
    currentStageOfQuest: "1",
    noOfPoints: "100",
    noOfLevels: "5",
  },
  {
    image: "/path/to/image2.jpg",
    nameOfQuest: "Quest 2",
    currentStageOfQuest: "2",
    noOfPoints: "200",
    noOfLevels: "10",
  },
];

const mockOnClick = vi.fn();

describe("questLearningNow Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders 'Next Up' when isCompleted is false", () => {
    expect.assertions(1);
    render(
      <QuestLearningNow
        theQuest={mockQuests}
        isCompleted={false}
        onClick={mockOnClick}
      />,
    );
    expect(screen.getByText("Next Up")).toBeInTheDocument();
  });

  it("renders 'Completed' when isCompleted is true", () => {
    expect.assertions(1);
    render(
      <QuestLearningNow
        theQuest={mockQuests}
        isCompleted={true}
        onClick={mockOnClick}
      />,
    );
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("renders the quest details correctly", () => {
    expect.assertions(6);
    render(
      <QuestLearningNow
        theQuest={mockQuests}
        isCompleted={false}
        onClick={mockOnClick}
      />,
    );
    expect(screen.getByText("Quest 1")).toBeInTheDocument();
    expect(screen.getByText("Stage 1")).toBeInTheDocument();
    expect(screen.getByText("100 Points")).toBeInTheDocument();
    expect(screen.getByText("5 Levels")).toBeInTheDocument();
    expect(screen.getByText("Quest 2")).toBeInTheDocument();
    expect(screen.getByText("Stage 2")).toBeInTheDocument();
  });

  it("calls onClick when the button is clicked", async () => {
    expect.assertions(2);
    render(
      <QuestLearningNow
        theQuest={mockQuests}
        isCompleted={false}
        onClick={mockOnClick}
      />,
    );
    const buttons = screen.getAllByText("Preview Quest");
    expect(buttons[0]).toBeInTheDocument();
    await userEvent.click(buttons[0]);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
