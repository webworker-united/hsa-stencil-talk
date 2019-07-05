import { newE2EPage } from "@stencil/core/testing";

describe("ww-tab-selection", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<ww-tab-selection></ww-tab-selection>");
    const element = await page.find("ww-tab-selection");
    expect(element).toHaveClass("hydrated");
  });
});
