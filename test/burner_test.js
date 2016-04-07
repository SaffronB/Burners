var assert = require("assert");
var burner = require("../burner.js");
var whatsuppMsgs = "'It was 67MB. Is that everything? I’m busy, you know.', 'Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.', 'I think 283MB. That’s what the guy at the store said. I think it means MegaBites.','I think 283MB. That’s what the guy at the store said. I think it means MegaBites.', 'Around 150MB. I have the receipts if you need more precise figures.'";


describe("For this assesment, ", function() {

  it("I need to create a function that sorts through the whatsuppMsgs and finds the person who uses the most data", function() {
    var result = burner.mostData(whatsuppMsgs);
    assert.deepEqual(result, 'Jesse');

  });
});
