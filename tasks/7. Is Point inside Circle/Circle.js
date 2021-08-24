import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) { // https://math.stackexchange.com/questions/198764/how-to-know-if-a-point-is-inside-a-circle
      let distToCenter = (Point.x - center.x) ** 2 + (Point.y - center.y) ** 2;

      return distToCenter <= radius ** 2;
    }
  }
}
