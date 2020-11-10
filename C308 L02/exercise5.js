calculate_circle = (radius) => {
  const pie = 3.142;
  let circumference = pie * 2 * radius;
  let area = pie * Math.pow(radius, 2);
  var output = "";
  output += ("The circumference is " + (Math.round(circumference * 100) / 100) + "\n");
  output += ("The area is " + (Math.round(area * 100) / 100));
  return output;
}
