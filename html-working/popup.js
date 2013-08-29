function requestTranslation(o) {
    
    //set variables for the url

    var FUNCTION = "requestTranslation"
    var ENGINE = "google.translate"; //document.getElementById("engine").value;

    if (ENGINE == "google.translate") {
        var SELECT = "json";
    }
    else {
        var SELECT = "content";
    }

    var FORMAT = "json";
    var QUERY = encodeURIComponent(document.getElementById('input').value);
    var FROMLANGUAGE = document.getElementById("originalLanguage").value;
    var TOLANGUAGE = document.getElementById("translatedLanguage").value;
    //var CLIENT_ID = "";
    //var CLIENT_SECRET = encodeURIComponent("");

    //set url path and append script in the document
    var script = document.createElement("script");

    //Google URL
    if (ENGINE == "google.translate") {
        var SRC = "http://query.yahooapis.com/v1/public/yql?q=select%20" + 
            SELECT +
            "%20from%20" +
            ENGINE + 
            "%20where%20q%3D%22" +
            QUERY +
            "%22%20and%20target%3D%22" +
            TOLANGUAGE + 
            "%22%20and%20source%3D%22" +
            FROMLANGUAGE +
            "%22%3B&format=" +
            FORMAT +
            "&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=" +
            FUNCTION;
    }
    //Bing URL
    else {
        var SRC = "http://query.yahooapis.com/v1/public/yql?q=select%20" +
            SELECT +
            "%20from%20" +
            ENGINE +
            "%20where%20text%3D%22" +
            QUERY +
            "%22%20and%20client_id%3D%22" +
            CLIENT_ID +
            "%22%20and%20client_secret%3D%22" +
            CLIENT_SECRET +
            "%22%20and%20from%3D%22" +
            FROMLANGUAGE +
            "%22%20and%20to%3D%22" +
            TOLANGUAGE +
            "%22&format=" +
            FORMAT +
            "&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=" +
            FUNCTION;
    }

    script.src = SRC;
    $("body").append(script);           
    

    //fetch data from url returned data
    //Google fetching
    if (ENGINE == "google.translate") {
        var translatedText= o.query.results.json[0].json.json.json[0];
    }
    //Bing fetching
    else {
        var translatedText= o.query.results.string.content;
    }


    //var output = '';
    //for(var i=0;i<translatedText.length;i++){
    //  var translation = translatedText[i];
    //  output += "<h3>"+translation+"</h3>";
    //}
    // Place news stories in div tag

    //send fetched data to the output textarea
    document.getElementById('output').innerHTML = translatedText;
}

function reverseLanguage() {
    var lan1 = document.getElementById("originalLanguage").value;
    var lan2 = document.getElementById("translatedLanguage").value;

    document.getElementById("originalLanguage").value = lan2;
    document.getElementById("translatedLanguage").value = lan1;

    if (document.getElementById('input').value != "") {
        var input = document.getElementById('input').value;
        var output = document.getElementById('output').value;

        document.getElementById('input').value = output;
        document.getElementById('output').value = input;
    }
}

/*
function pop_img() {
    var img="lost-in-translation.jpg";
    w=open("",'image','weight=toolbar=no,scrollbars=no,resizable=yes,width=483,height=535');
    w.document.write("<HTML><BODY onblur=\"window.close();\"><iMG src='"+img+"'>");
    w.document.write("</BODY></HTML>");
    w.document.close();
}
*/

document.addEventListener('DOMContentLoaded', function() {
    var reverse = document.getElementById('reverse');
    reverse.addEventListener('click', function() {
        reverseLanguage();
    });

    //var translate = document.getElementById('submit');
    //translate.addEventListener('click', function() {
    requestTranslation();
});
