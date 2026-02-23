var fromArray = ["work", "job"];
var toArray = ["werk", "baan"];
var currentWordIndex = 0;

$(document).ready(function () {
  $("#card").flip({
    axis: 'x',
    trigger: 'click'
  });
  $('#prevBtn').click(function (e) {
    nextWord(-1);
  });
  $('#nextBtn').click(function (e) {
    nextWord(1);
  });
  $('#updateBtn').click(function (e) {
    updateLists();
  });
  $('#checkBtn').click(function (e) {
    check();
  });
  update(currentWordIndex);
  $("#fromTextArea").text(fromArray.join("\n"));
  $("#toTextArea").text(toArray.join("\n"));
});

function check(){
  if ($('#checkInput').val()===toArray[currentWordIndex]){
    $("#checkInput").css({"border-color": "green", "border-width":"10px", "border-style":"solid"});
  }else{
    $("#checkInput").css({"border-color": "red", "border-width":"10px", "border-style":"solid"});
  }
}

function nextWord(inc) {
  currentWordIndex += inc;
  if (currentWordIndex < 0) {
    currentWordIndex = fromArray.length - 1;
  } else if (currentWordIndex >= fromArray.length) {
    currentWordIndex = 0;
  }
  update(currentWordIndex);
}

function updateLists(){
  fromArray = $("#fromTextArea").val().split("\n");
  toArray = $("#toTextArea").val().split("\n");
}

function update(index) {
  $("#fromText").text(fromArray[index]);
  $("#toText").text(toArray[index]);
}
