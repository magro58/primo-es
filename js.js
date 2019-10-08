  function addline() {
    var tab = document.getElementById("hiddentb");
    var row = document.getElementById("hiddenrw");
    var clone = row.cloneNode(true);
    var table = document.getElementById("tro");
    table.appendChild(clone);
  }
