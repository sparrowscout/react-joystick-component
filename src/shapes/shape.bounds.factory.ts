import { JoystickShape } from "../enums/shape.enum";

export const shapeBoundsFactory = (
  shape: JoystickShape,
  absoluteX: number,
  absoluteY: number,
  relativeX: number,
  relativeY: number,
  dist: number,
  radius: number,
  baseSize: number,
  parentRect: DOMRect
) => {
  switch (shape) {
    case JoystickShape.Square:
      relativeX = getWithinBounds(absoluteX - parentRect.left - baseSize / 2, baseSize);
      relativeY = getWithinBounds(absoluteY - parentRect.top - baseSize / 2, baseSize);
      return { relativeX, relativeY };

    case JoystickShape.Line:
      relativeX = getWithinBounds(
        absoluteX - parentRect.left - parentRect.width / 2,
        parentRect.width
      );
      relativeY = 0;
      return { relativeX, relativeY };

    default:
      if (dist > radius) {
        relativeX *= radius / dist;
        relativeY *= radius / dist;
      }
      return { relativeX, relativeY };
  }
};

const getWithinBounds = (value: number, baseSize: number): number => {
  const halfBaseSize = baseSize / 2;
  if (value > halfBaseSize) {
    return halfBaseSize;
  }
  if (value < -halfBaseSize) {
    return halfBaseSize * -1;
  }
  return value;
};
