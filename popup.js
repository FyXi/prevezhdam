function translateIt() {
    var input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = input;
}

var QUERY = "This is a test.";
var ENGINE = "google.translate";
var TOLANGUAGE = "fr";
var translateQuery  = {

   /**
    * Yahoo URL that will give XML file from desired translation engine.
    *
    * See http://developer.yahoo.com/yql/console/?q=select%20*%20from%20google.translate%20where%20q%3D%22This%20is%20a%20test%22%20and%20target%3D%22de%22%3B&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys#h=select%20*%20from%20google.translate%20where%20q%3D%22This%20is%20a%20test%22%20and%20target%3D%22fr%22%3B for
    * details about the construction of this URL.
    *
    * @type {string}
    * @private
    */
    searchOnGoogle_: 'http://query.yahooapis.com/v1/public/yql?' +
        'q=select%20*%20from%20' +
        ENGINE + '%20' +
        'where%20q%3D%22' +
        QUERY.replace(/\s/g, "%20") + '%22%20' +
        'and%20target%3D%22' +
        TOLANGUAGE + '%22' +
        '%3B&diagnostics=true&env=store&3A%2F%2F' +
        'datatables.org%2Falltableswithkeys',


   /**
    * Sends an XHR GET request to get translation. The
    * XHR's 'onload' event is hooks up to the 'showTranslation_' method.
    *
    * @public
    */
    requestTranslation: function() {
        var req = new XMLHttpRequest();
        req.open("GET", this.searchOnGoogle_, true);
        req.onload = this.showTranslation_.bind(this);
        req.send(null);
      },


   /**
    * Handle the 'onload' event of translation request, generated in
    * 'requestTranslation', by generating 'json' elements, and stuffing them into
    * the document for display.
    *
    * @param {ProgressEvent} e The XHR ProgressEvent.
    * @private
    */
   showTranslation_: function (e) {
     var translations = e.target.responseXML.querySelectorAll('json');
     for (var i = 0; i < translations.length; i++) {
       document.getElementById('output').innerHTML = translations[i].innerHTML;
     }
   }

};

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
        translateQuery.requestTranslation();        
    });
});
