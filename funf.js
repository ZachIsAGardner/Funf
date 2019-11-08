setInterval(function(){
    // Check
    var elements = document.getElementsByClassName("PromotedVideo");

    // The obnoxious trailer ad popped up.
    if (elements.length >= 1) {
        console.log("ANNOYING DETECTED.");

        document.getElementsByClassName("player-view-childrens")[0].click();
    }
    // All good
    else {
        console.log("No annoyances detected.");
    }
}, 1000);