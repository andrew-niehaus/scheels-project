/*
    Main function for adding rows to the data table
*/
function loadValues(min, max, table, modThreeValue, modFiveValue) {
  min = parseInt(min);
  max = parseInt(max);
  var values = [];
  for (var i = min; i <= max; i++) {
    var translated = translate(i, modThreeValue, modFiveValue);
    values.push("<tr><td>" + i + "</td><td>" + translated + "</td></tr>");
  }
  table.innerHTML = values.join("");
}

/*
    Takes in an integer value and outputs the corresponding
    value depending on what divides the input
*/
function translate(value, modThreeValue, modFiveValue) {
  var output = "";
  if (value % 3 == 0) output += modThreeValue;
  if (value % 5 == 0) output += modFiveValue;
  if (output == "") return value;
  return output;
}
