import { SwiftUIContext } from "../../../swiftui/context";
import { walk } from "../../../swiftui/walks/walk";
import { createText } from "../utility/utility";
import { createFigma } from "figma-api-stub";

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
    button.name = "SwiftUI::Button";
    button.paddingBottom = 0;
    button.paddingLeft = 0;
    button.paddingTop = 0;
    button.paddingRight = 0;
    button.appendChild(createText("1"));

    const context = new SwiftUIContext();
    context.root = button;
    walk(context, button);

    const code = `
Button(action: { /* TODO */ }) {
    Text(verbatim: "1")
}
`;
    expect(context.code).toEqual(code.slice("\n".length));
  });
});
