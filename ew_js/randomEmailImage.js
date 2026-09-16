(function () {
    "use strict";

    var emailImages = [
        "email/cooltext515072692388639.png",
        "email/cooltext515072819097278.png",
        "email/cooltext515072932627177.png",
        "email/cooltext515073086415181.png",
        "email/cooltext515073185308178.png",
        "email/cooltext515073284932816.png",
        "email/cooltext515073332174708.png",
        "email/cooltext515073389034569.png"
    ];

    function chooseRandomEmailImages() {
        var elements = document.querySelectorAll(".random-email-image");
        var i;

        for (i = 0; i < elements.length; i += 1) {
            elements[i].src = emailImages[
                Math.floor(Math.random() * emailImages.length)
            ];
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            chooseRandomEmailImages,
            { once: true }
        );
    } else {
        chooseRandomEmailImages();
    }

    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            chooseRandomEmailImages();
        }
    });
}());
