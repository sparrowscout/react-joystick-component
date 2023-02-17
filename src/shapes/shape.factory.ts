import { JoystickShape } from "../enums/shape.enum";

export const shapeFactory = (shape: JoystickShape, size: number) => {
  switch (shape) {
    case JoystickShape.Circle:
      return { height: size, width: size, borderRadius: size };
    case JoystickShape.Square:
      return { height: size, width: size, borderRadius: Math.sqrt(size) };
    case JoystickShape.Line:
      return {
        width: size,
        height: size * 0.1,
        borderRadius: size,
      };
  }
};
