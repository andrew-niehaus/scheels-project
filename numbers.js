function loadValues(n, elem, modThreeValue, modFiveValue){
    var values = [];
    for (var i = 1; i <= n; i++){
        var translated = translate(i, modThreeValue, modFiveValue);
        values.push('<tr><td>' + i + '</td><td>' + translated + '</td></tr>');
    }
    elem.innerHTML = values.join('');
}

/*
    Takes in an integer value and outputs the corresponding
    value depending on what divides the input
*/
function translate(value, modThreeValue, modFiveValue){
    var output = '';
    if (value % 3 == 0) output += modThreeValue;
    if (value % 5 == 0) output += modFiveValue;
    if (output == '') return value;
    return output;
}