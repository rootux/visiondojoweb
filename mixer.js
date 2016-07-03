
function obtener_id(url_video){
  var elementos = url_video.split('/');
  var id = elementos[elementos.length - 1];
  return id;
}

function onYouTubePlayerReady(playerId){
  if (playerId == "ytplayer1"){
    ytplayer1 = document.getElementById("myytplayer1");
    ytplayer1.playVideo();
    setTimeout(function(){ $('#slider').val(0); slider_change();}, 500);
  } else if(playerId == 'ytplayer2'){
    ytplayer2 =document.getElementById('myytplayer2');
    ytplayer2.playVideo();
    setTimeout(function(){ $('#slider').val(0); slider_change(); }, 500);
  } else if(playerId == 'ytplayer3'){
    ytplayer3=document.getElementById('myytplayer3');
    ytplayer3.playVideo();
  }
}

$(function() {
  // $('#muteAll').click(function() {
  //   player.setVolume(0);
  //   player2.setVolume(0);
  // });
});

function slider_change()
{
  var value = $('#slider').val();
  player.setVolume(100 - value);
  player2.setVolume(0);
  player3.setVolume(value - 20);
}

