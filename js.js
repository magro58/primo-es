  function addline() {
    var tab = document.getElementById("hiddentb");
    var row = document.getElementById("hiddenrw");
    var clone = row.cloneNode(true);
    var table = document.getElementById("tro");
    table.appendChild(clone);
  }

var audio = new Audio("pfudor.mp3") ;

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}

audio.pause();