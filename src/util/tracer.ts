import { FigmaContext } from "../reader/context";

export function trace(
  prefix: string = "",
  context: FigmaContext,
  node: SceneNode
) {
  const { id, name, type } = node;
  console.log(`${prefix} ${JSON.stringify({ id, name, type })}`);
}
