import { createText } from "../utility/utility";
import { createFigma } from "figma-api-stub";
import { run } from "../../run";

describe("#Button", () => {
  const figma = createFigma({
    simulateErrors: true,
    isWithoutTimeout: false,
  });
  // @ts-ignore for some reason, need to override this for figma.mixed to work
  global.figma = figma;

  test("it is besically pattern. For Text Button", async () => {
    await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

    const button = figma.createFrame();
    button.strokes = [];
    button.name = "SwiftUI::Button";
    button.paddingBottom = 0;
    button.paddingLeft = 0;
    button.paddingTop = 0;
    button.paddingRight = 0;
    button.appendChild(createText("1"));

    const code = `
Button(action: { /* TODO */ }) {
    Text("1")
}
`;
    expect(run(button)).toEqual(code.slice("\n".length));
  });
});
