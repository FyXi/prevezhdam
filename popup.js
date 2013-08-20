function requestTranslation(o) {
    var input = document.getElementById('input').value;

    var QUERY = "This is a test.";
    var ENGINE = "google.translate";
    var TOLANGUAGE = "fr";

    var items = o.query.results.json[4].json.json.json[0];
    //var output = '';
    //for(var i=0;i<items.length;i++){
    //  var translation = items[0].json.json[i];
    //  output += "<h3>"+translation+"</h3>";
    //}
    // Place news stories in div tag

    document.getElementById('output').innerHTML = items;
}


function pop_img() {
    var img="lost-in-translation.jpg";
    w=open("",'image','weight=toolbar=no,scrollbars=no,resizable=yes,width=483,height=535');
    w.document.write("<HTML><BODY onblur=\"window.close();\"><iMG src='"+img+"'>");
    w.document.write("</BODY></HTML>");
    w.document.close();
}


document.addEventListener('DOMContentLoaded', function() {
    var translate = document.getElementById('submit');
    translate.addEventListener('click', function() {
        requestTranslation("http://query.yahooapis.com/v1/public/yql?q=select%20json%20from%20google.translate%20where%20q%3D%22This%20is%20a%20test%22%20and%20target%3D%22fr%22%3B&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=requestTranslation");
    });
});
