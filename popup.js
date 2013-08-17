function translateIt() {
    var input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = input;
}


document.addEventListener('DOMContentLoaded', function() {
    var translate = document.getElementById('submit');
    translate.addEventListener('click', function() {
        translateIt();
    });
});
