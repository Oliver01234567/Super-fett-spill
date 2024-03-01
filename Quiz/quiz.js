

quiz_poeng = 0



function hente_resultater() {

    svar1 = document.getElementById("riktig_svar1")
    svar2 = document.getElementById("riktig_svar2")
    svar3 = document.getElementById("riktig_svar3")
    svar4 = document.getElementById("riktig_svar4")

    if (svar1.checked == true) {
        if (svar2.checked == true) {
            if (svar3.checked == true) {
                if (svar4.checked == true) {
                    alert("Riktig")
                    let quiz1Seier = 1
                    sessionStorage.setItem("quiz1Seier", quiz1Seier)
                    window.location.href = '../Index.html';
                } else {
                    alert("wrong")
                }
            } else {
                alert("wrong")
            }
        } else {
            alert("wrong")
        }
    } else {
        alert("wrong ")
    }

}