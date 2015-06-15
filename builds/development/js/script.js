  "use strict";
  var request;
  request=new XMLHttpRequest();
  request.open('GET', 'js/data.json');
  request.onreadystatechange = function() {
    if ((request.status === 200) &&
      (request.readyState === 4)) {
        var data = JSON.parse(request.responseText);
        var template = document.querySelector('#media').innerHTML;
        var html = Mustache.to_html(template, data);
        document.querySelector('#social').innerHTML=html;
    } //ready
  }; //event
  request.send();