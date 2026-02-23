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
  update(currentWordIndex);
});

function nextWord(inc) {
  currentWordIndex += inc;
  if (currentWordIndex < 0) {
    currentWordIndex = fromArray.length - 1;
  } else if (currentWordIndex >= fromArray.length) {
    currentWordIndex = 0;
  }
  update(currentWordIndex);
}

function update(index) {
  $("#fromText").text(fromArray[index]);
  $("#toText").text(toArray[index]);
}
