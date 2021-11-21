import { SwiftUIContext } from "./swiftui/context";
import { walk } from "./swiftui/walkers/walkers";

const run = async () => {
  const root = figma.currentPage.selection[0];
  const traversedContext = traversed(root);
  print(traversedContext);
  figma.closePlugin();
};

const traversed = (root: SceneNode): SwiftUIContext => {
  const context = new SwiftUIContext();
  walk(context, root);
  return context;
};

const print = (context: SwiftUIContext) => {
  console.log(context.code);
};

run();
