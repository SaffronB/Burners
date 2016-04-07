exports.mostData = function(whatsuppMsgs) {
  var dataText = whatsuppMsgs.match(/\d+/g);

  // console.log(dataText);
  var dataObject = {
    Walter: Number(dataText[0]),
    Jesse: Number(dataText[1]),
    Saul: Number(dataText[2]),
    Gus: Number(dataText[3]),
  }
  console.log (dataObject);

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

exports.leastData = function(dataObject){

  var msgName = '';
  var lowest = 7465353363;


  for (name in dataObject) {
    var data = dataObject[name];
    var name = name;


    // find lowest data usage
    if (data < lowest) {
      lowest = data;
      msgName = name;
    }
  }
  return msgName;
  }
