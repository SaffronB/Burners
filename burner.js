exports.mostData = function(whatsuppMsgs) {
  var dataText = whatsuppMsgs.match(/\d+/g);

  // console.log(dataText);
  var dataObject = {
    Walter: Number(dataText[0]),
    Jesse: Number(dataText[1]),
    Saul: Number(dataText[2]),
    Gus: Number(dataText[3]),
  }

  // console.log(dataObject);
  var highest = 0;
  var msgName = '';

  for (name in dataObject) {
    var data = dataObject[name];
    var name = name;

    // find highest data usage
    if (data > highest) {
      highest = data;
      msgName = name;
    }
  }


  return msgName;
}
