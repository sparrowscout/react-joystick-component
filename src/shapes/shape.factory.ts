import { JoystickShape } from "../enums/shape.enum";

export const shapeFactory = (shape: JoystickShape, size: number) => {
  switch (shape) {
    case JoystickShape.Circle:
      return { height: `${size}px`, width: `${size}px`, borderRadius: size };
    case JoystickShape.Square:
      return { height: `${size}px`, width: `${size}px`, borderRadius: Math.sqrt(size) };
    case JoystickShape.Line:
      return {
        width: `${size}rem`,
        height: `${size * 0.1}rem`,
        borderRadius: `${size}rem`,
      };
  }
};
