var assert = require("assert");
var burner = require("../burner.js");
var whatsuppMsgs = "'It was 67MB. Is that everything? I’m busy, you know.', 'Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.', 'I think 283MB. That’s what the guy at the store said. I think it means MegaBites.','I think 283MB. That’s what the guy at the store said. I think it means MegaBites.', 'Around 150MB. I have the receipts if you need more precise figures.'";
var appsMsgs ="'Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.'| 'Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.'| 'I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.'| 'I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.'";
var importantApps = 'Faceblock, Instantgam, Tooter, Snaptalk, LankedOn'
describe("For this assesment, ", function() {

  it("I need to create a function that sorts through the whatsuppMsgs and finds the person who uses the most data", function() {
    var result = burner.mostData(whatsuppMsgs);
    assert.deepEqual(result, 'Jesse', 300 );

  });

  it("I need to create a function that returns the person who uses the least amount of data", function() {
    var result = burner.leastData({ Walter: 67, Jesse: 300, Saul: 283, Gus: 283 });
    assert.deepEqual(result, 'Walter');

  });

  it("I need to create a function that returns the person who uses the most apps", function() {
    var result = burner.mostApps(appsMsgs, importantApps);
    assert.deepEqual(result, 'Jesse');

  });


});
