import { SwiftUIContext } from "../../../swiftui/context";
import { walk } from "../../../swiftui/walkers/walkers";
import { createText } from "../utility/utility";
import { createFigma } from "figma-api-stub";

describe("#View.frame(_:)", () => {
  const figma = createFigma({
    simulateErrors: true,
    isWithoutTimeout: false,
  });
  // @ts-ignore for some reason, need to override this for figma.mixed to work
  global.figma = figma;

  describe("for VStack", () => {
    describe("VStack layout align for INHERIT mode", () => {
      test("VStack primary and counter axis size are FIXED", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "VERTICAL";
        vstack.layoutAlign = "INHERIT";
        vstack.primaryAxisSizingMode = "FIXED";
        vstack.counterAxisSizingMode = "FIXED";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
VStack(alignment: .leading, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(width: 100, height: 200)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });

      test("VStack primary axis is FIXED, and counter axis is AUTO", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "VERTICAL";
        vstack.layoutAlign = "INHERIT";
        vstack.primaryAxisSizingMode = "FIXED";
        vstack.counterAxisSizingMode = "AUTO";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
VStack(alignment: .leading, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(height: 200)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });

      test("VStack primary axis is AUTO, and counter axis is FIXED", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "VERTICAL";
        vstack.layoutAlign = "INHERIT";
        vstack.primaryAxisSizingMode = "AUTO";
        vstack.counterAxisSizingMode = "FIXED";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
VStack(alignment: .leading, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(width: 100)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });
    });

    describe("VStack layout align for STRETCH mode", () => {
      test("VStack primary and counter axis size are FIXED", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "VERTICAL";
        vstack.layoutAlign = "STRETCH";
        vstack.primaryAxisSizingMode = "FIXED";
        vstack.counterAxisSizingMode = "FIXED";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
VStack(alignment: .leading, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(maxWidth: .infinity, maxHeight: .infinity)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });

      test("VStack primary axis is FIXED, and counter axis is AUTO", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "VERTICAL";
        vstack.layoutAlign = "STRETCH";
        vstack.primaryAxisSizingMode = "FIXED";
        vstack.counterAxisSizingMode = "AUTO";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
VStack(alignment: .leading, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(maxWidth: .infinity, maxHeight: 200)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });

      test("VStack primary axis is AUTO, and counter axis is FIXED", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "VERTICAL";
        vstack.layoutAlign = "STRETCH";
        vstack.primaryAxisSizingMode = "AUTO";
        vstack.counterAxisSizingMode = "FIXED";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
VStack(alignment: .leading, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(maxWidth: .infinity)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });
    });
  });

  describe("for HStack", () => {
    describe("HStack layout align for INHERIT mode", () => {
      test("HStack primary and counter axis size are FIXED", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "HORIZONTAL";
        vstack.layoutAlign = "INHERIT";
        vstack.primaryAxisSizingMode = "FIXED";
        vstack.counterAxisSizingMode = "FIXED";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
HStack(alignment: .top, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(width: 100, height: 200)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });

      test("HStack primary axis is FIXED, and counter axis is AUTO", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "HORIZONTAL";
        vstack.layoutAlign = "INHERIT";
        vstack.primaryAxisSizingMode = "FIXED";
        vstack.counterAxisSizingMode = "AUTO";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
HStack(alignment: .top, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(width: 100)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });

      test("HStack primary axis is AUTO, and counter axis is FIXED", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "HORIZONTAL";
        vstack.layoutAlign = "INHERIT";
        vstack.primaryAxisSizingMode = "AUTO";
        vstack.counterAxisSizingMode = "FIXED";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
HStack(alignment: .top, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(height: 200)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });
    });

    describe("HStack layout align for STRETCH mode", () => {
      test("HStack primary and counter axis size are FIXED", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "HORIZONTAL";
        vstack.layoutAlign = "STRETCH";
        vstack.primaryAxisSizingMode = "FIXED";
        vstack.counterAxisSizingMode = "FIXED";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
HStack(alignment: .top, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(maxWidth: .infinity, maxHeight: .infinity)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });

      test("HStack primary axis is FIXED, and counter axis is AUTO", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "HORIZONTAL";
        vstack.layoutAlign = "STRETCH";
        vstack.primaryAxisSizingMode = "FIXED";
        vstack.counterAxisSizingMode = "AUTO";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
HStack(alignment: .top, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(maxWidth: 100, maxHeight: .infinity)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });

      test("HStack primary axis is AUTO, and counter axis is FIXED", async () => {
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const vstack = figma.createFrame();
        vstack.layoutMode = "HORIZONTAL";
        vstack.layoutAlign = "STRETCH";
        vstack.primaryAxisSizingMode = "AUTO";
        vstack.counterAxisSizingMode = "FIXED";
        vstack.counterAxisAlignItems = "MIN";
        vstack.paddingLeft = 0;
        vstack.paddingTop = 0;
        vstack.paddingRight = 0;
        vstack.paddingBottom = 0;
        vstack.itemSpacing = 10;
        vstack.resize(100, 200);
        vstack.appendChild(createText("1"));
        vstack.appendChild(createText("2"));
        vstack.appendChild(createText("3"));

        const context = new SwiftUIContext();
        walk(context, vstack);

        const code = `
HStack(alignment: .top, spacing: 10) {
    Text("1")
    Text("2")
    Text("3")
}
.frame(maxHeight: .infinity)
`;
        expect(context.code).toEqual(code.slice("\n".length));
      });
    });
  });
});
