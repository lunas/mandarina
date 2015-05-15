$(document).ready(function() {
	var pagename = getCurrentPagename();

  // replace current header menu item link with just text
  var a = $('ul.nav a[href$="' + pagename + '"]');
  var label = a.html();
  a.parent().addClass('current').text(label);

  // replace current footer menu item link with just text
  //a = $('#footer ul a[href$="' + pagename + '"]');
  //a.parent().text(label + (label=='Kontakt' ? '' : ' | '));

  $('#homelink').click(function(event){
      window.location = 'http://www.mandarina.ch';
  })

  $('.moving-gallery').on('click', 'a', function(e) {
    var upper = $(this);
    var lower = $(this).parent();
    var max_image = lower.data('maxImage')
    if (upper.css('opacity') <= 0.5) {
      upper.fadeTo(1500, 1, function(){
        lower.css('background-image', next_url(upper, max_image));
      });
    } 
    else{
      upper.fadeTo(1500, 0, function(){
        upper.css('background-image', next_url(lower, max_image));
      })
    }
    return false;
  });

  setInterval( function(){
    $('.moving-gallery a').click();
  }, 6000);

});

function next_url(element, max_image) {
  var url = element.css('background-image');
  var url = url.split('-');
  var part1 = url[0];
  var nr  = parseInt(url[1].split('.')[0]);
  if (isNaN(nr)) return false;
  nr = (nr==max_image) ? 0 : nr+1;
  var src  = part1 + '-' + nr + '.jpg)';
  return src;
};

function getCurrentPagename() {
  var n = location.pathname;
  if (n=='/') {
    return 'index.html';
  }
  var i = n.lastIndexOf('/');
  return n.substring(i+1);
}
