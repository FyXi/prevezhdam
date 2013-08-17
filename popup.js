var goTranslate = {

    searchOnGoogle_: 'http://translate.google.com/#fr/en/this%20is%20my%20home%0Awhere%20are%20you%20living',

    requestTranslate: function() {
        var req = new XMLHttpRequest();
        req.open("GET", this.searchOnGoogle_, true);
        req.onload = this.showTranslation_.bind(this);
        req.send(null);
    },

    showTranslation_: function (e) {
        var text = e.target.responseHTML.querySelectorAll('span');
        document.getElementById('output').innerHTML = text;
    }
};


document.addEventListener('DOMContentLoaded', function() {
    var translate = document.getElementById('submit');
    translate.addEventListener('click', function() {
        goTranslate.requestTranslate();
    });
});
