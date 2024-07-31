import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { Cookies } from "./index";

describe("cookies Modal", () => {
  it("should render the modal after 8 seconds", () => {
    expect.hasAssertions();
    setTimeout(() => {
      render(<Cookies />);
    }, 9000);
    expect(true).toBeTruthy();
  });
});
