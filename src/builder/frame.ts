import { BuildContext } from "./context";
import { FrameModifier } from "../types/modifiers";
import { trace } from "./tracer";

export function buildFrame(context: BuildContext, frame: FrameModifier) {
  trace("#buildFrame", context, frame);

  const addFrameArguments = (properties, type) => {
    const argumentsArray = properties.map(property => {
      if (frame[property] != null) {
        return `${property}: ${type == 'max' ? '.infinity' : frame[property]}`;
      }
    }).filter(Boolean);

    if (frame.alignment !== 'center' && argumentsArray.length > 0) {
      argumentsArray.push(`alignment: .${frame.alignment}`);
    }

    if (argumentsArray.length > 0) {
      const argumentStr = argumentsArray.join(", ");
      context.add(`.frame(${argumentStr})`);
    }
  }

  addFrameArguments(['maxWidth', 'maxHeight'], 'max');
  addFrameArguments(['width', 'height'], 'fixed');
}
