const assert = require("assert");
import { SwiftUIContext } from "../../context";
import { PositionModifier } from "../../types/modifiers";
import { View } from "../../types/views";

export function walkForPosition(
  context: SwiftUIContext,
  view: View,
  node: LayoutMixin & SceneNode
) {
  if (context.root == null) {
    return;
  }
  if (context.root.node?.id === node.id) {
    return;
  }

  const { x, y, width, height } = node;
  const position: PositionModifier = {
    type: "position",
    x: x + width / 2,
    y: y + height / 2,
  };
  view.modifiers.push(position);
}
