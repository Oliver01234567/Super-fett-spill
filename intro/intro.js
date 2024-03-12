document.addEventListener("DOMContentLoaded", function() {
    const snakkebobleContainer = document.getElementById("snakkeboble-container");
    const snakkeboble = document.getElementById("snakkeboble");
    const nextButton = document.getElementById("nextButton");
    const backButton = document.getElementById("backButton");

    function visElementer() {
        snakkebobleContainer.style.display = "block";
        SpillForklaring.style.transform ="scaleX(1)"
    }
    

    // Gjør snakkeboblen og knappene synlige etter 3 sekunder
    setTimeout(visElementer, 3000);
});


