import { render } from "@testing-library/react";

import QuestPreviewCard from "../questPreviewCard";

describe("quest wrapper component", () => {
  it("rendered component", () => {
    expect.assertions(1);

    render(
      <QuestPreviewCard
        cardImage="/image.png"
        level={1}
        points={2}
        stage={1}
        title="Card title"
        path="/"
        id={1}
      />,
    );

    expect(true).toBeTruthy();
  });
});
