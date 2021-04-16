function loadValues(n, elem){
    var values = [];
    for (var i = 1; i <= n; i++){
        var translated = translate(i);
        values.push('<tr><td>' + i + '</td><td>' + translated + '</td></tr>');
    }
    elem.innerHTML = values.join('');
}

function translate(value){
    var output = '';
    if (value % 3 == 0) output += "SCHEELS";
    if (value % 5 == 0) output += ".COM";
    if (output == '') return value;
    return output;
}