$(function() {
  var ip = "playmc.mx";
  var players = $("#players");
  
  getStatus(ip, players);

  $('#forum').hover(function() {
    $(this).attr('src', './img/forum_hover.png');
  }, function() {
    $(this).attr('src', './img/forum.png');
  });

  $('#store').hover(function() {
    $(this).attr('src', './img/store_hover.png');
  }, function() {
    $(this).attr('src', './img/store.png');
  });

  $('#bans').hover(function() {
    $(this).attr('src', './img/bans_hover.png');
  }, function() {
    $(this).attr('src', './img/bans.png');
  });

  $('#vote').hover(function() {
    $(this).attr('src', './img/vote_hover.png');
  }, function() {
    $(this).attr('src', './img/vote.png');
  });
});

function getStatus(ip, identifier) {
   $.getJSON("https://mcapi.ca/query/" + ip + "/players", function(json){
    if(json.players.online !== undefined) {
      $(identifier).html(numeral(json.players.online).format('0,0')); 
    } else {
      $(identifier).html('<i class="fa fa-cog fa-spin"></i>');
    }
  }); 
}