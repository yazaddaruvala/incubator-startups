$(document).ready(function(){
  now.appendStartup = function(data){
    htmlToAppend = '<div class="startup">';
    if (data.url == "undefined")
      htmlToAppend += '<h4 id="name">'+data.name+'</h4>';
    else
      htmlToAppend += '<h4 id="name"><a href="'+data.url+'" target="_blank">'+data.name+'</a></h4>';
    htmlToAppend += '<ul>'+
                   '<li>Joined Program: '+data.start_date+'</li>'+
//                   '<li><a href="http://www.wikipedia.org/wiki/'+data.name+'" target="_blank">Wikipedia Article</a><p>(LOL.. this isn\'t exactly working)</p></li>'+
                   '<li>Summary:<p id="summary">' + '</p></li>'+
                   '</ul>'+
                   '</div>';
    $('#content').append(htmlToAppend);
  }
  $('#selectedStartup').change(function(){
    $('#content').empty();
    now.getStartupList(this.options[this.selectedIndex].text)
  });
});
