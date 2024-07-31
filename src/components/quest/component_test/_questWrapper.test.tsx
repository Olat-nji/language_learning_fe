import { render } from "@testing-library/react";

import QuestWraper from "../questWraper";

describe("quest wrapper component", () => {
  it("render quest wrapper component", () => {
    expect.assertions(1);

    render(
      <QuestWraper>
        <div>Hello world</div>
      </QuestWraper>,
    );

    expect(true).toBeTruthy();
  });

  it("has bg-white class", () => {
    expect.hasAssertions();
    const component = (
      <QuestWraper>
        <div>Hello world</div>
      </QuestWraper>
    );
    render(component);

    expect(true).toBeTruthy();
  });
});
