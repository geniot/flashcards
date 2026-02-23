let fromArray = ["work", "job"];
let toArray = ["werk", "baan"];
let currentWordIndex = 0;

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
  $('#showHideBtn').click(function (e) {
    const editorPanel = $("#editorPanel");
    if (editorPanel.hasClass('hidden')) {
      editorPanel.removeClass('hidden');
    } else {
      editorPanel.addClass('hidden');
    }
    updateShowHideText();
  });
  updateCard(currentWordIndex);
  $("#fromTextArea").text(fromArray.join("\n"));
  $("#toTextArea").text(toArray.join("\n"));
  updateShowHideText();
});

function check() {
  const checkInput = $('#checkInput');
  if (checkInput.val() === toArray[currentWordIndex]) {
    checkInput.css({"border-color": "green", "border-width": "10px", "border-style": "solid"});
  } else {
    checkInput.css({"border-color": "red", "border-width": "10px", "border-style": "solid"});
  }
}

function updateShowHideText() {
  if ($("#editorPanel").hasClass('hidden')) {
    $("#showHideBtn").text('+');
  } else {
    $("#showHideBtn").text('-');
  }
}

function nextWord(inc) {
  currentWordIndex += inc;
  if (currentWordIndex < 0) {
    currentWordIndex = fromArray.length - 1;
  } else if (currentWordIndex >= fromArray.length) {
    currentWordIndex = 0;
  }
  updateCard(currentWordIndex);
}

function updateLists() {
  fromArray = $("#fromTextArea").val().split("\n");
  toArray = $("#toTextArea").val().split("\n");
}

function updateCard(index) {
  $("#fromText").text(fromArray[index]);
  $("#toText").text(toArray[index]);
}
