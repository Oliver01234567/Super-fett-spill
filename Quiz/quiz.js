let money = 0
money = parseInt(localStorage.getItem("money")) || 0

let opponent = 0
opponent = parseInt(sessionStorage.getItem("opponent")) || 0

quiz_poeng = 0
let quiz1Seier = 0


function hente_resultater() {

    svar1 = document.getElementById("riktig_svar1")
    svar2 = document.getElementById("riktig_svar2")
    svar3 = document.getElementById("riktig_svar3")
    svar4 = document.getElementById("riktig_svar4")

    forslag1 = document.getElementById("spørsmål1_svar1")
    forslag2 = document.getElementById("spørsmål1_svar2")
    forslag3 = document.getElementById("spørsmål1_svar3")
    forslag4 = document.getElementById("spørsmål1_svar4")
    forslag5 = document.getElementById("spørsmål1_svar5")
    forslag6 = document.getElementById("spørsmål1_svar6")
    forslag7 = document.getElementById("spørsmål1_svar7")
    forslag8 = document.getElementById("spørsmål1_svar8")



    if (svar1.checked == true) {
        if (svar2.checked == true) {
            if (svar3.checked == true) {
                if (svar4.checked == true) {
                    
                    if (forslag1.checked == false &&
                        forslag2.checked == false &&
                        forslag3.checked == false &&
                        forslag4.checked == false && 
                        forslag5.checked == false &&
                        forslag6.checked == false &&
                        forslag7.checked == false &&
                        forslag8.checked == false ) {

                            if(opponent == 0) {
                                quiz1Seier = 1
                                localStorage.setItem("quiz1Seier", quiz1Seier)
                                window.location.href = '../Chests/ChestOpen.html';
                            }
                            
                            if(opponent == 19) {
                                quiz1Seier = 3
                                localStorage.setItem("quiz1Seier", quiz1Seier)
                                window.location.href = '../Island/index.html';
                            }

                        } else {
                        alert("Feil")
                        let tapPenger = money * 0.10
                        money = money * 0.90
                        showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
                        localStorage.setItem("money", money);}

                
                } else {
                    alert("Feil")

                    let tapPenger = money * 0.10
                    money = money * 0.90
                    showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
                    localStorage.setItem("money", money);
                }
            } else {
                alert("Feil")

                let tapPenger = money * 0.10
                money = money * 0.90
                showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
                localStorage.setItem("money", money);
            }
        } else {
            alert("Feil")

            let tapPenger = money * 0.10
            money = money * 0.90
            showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
            localStorage.setItem("money", money);
        }
    } else {
        alert("Feil ")

        let tapPenger = money * 0.10
        money = money * 0.90
        showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
        localStorage.setItem("money", money);
    }

}


function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert ' + type;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(function () {
        alertDiv.remove();
    }, 2000);
}


function neste() {

    if (document.getElementById("div_1_quiz_5").style.display = "block" == true) {
        document.getElementById("div_1_quiz_5").style.display = "none"
        document.getElementById("div_2_quiz_5").style.display = "block"
    } elif (document.getElementById("div_2_quiz_5").style.display = "block"==true); {
        document.getElementById("div_2_quiz_5").style.display = "none"
        document.getElementById("div_3_quiz_5").style.display = "block"
    } elif (document.getElementById("div_3_quiz_5").style.display = "block"==true); {
        document.getElementById("div_3_quiz_5").style.display = "none"
        document.getElementById("div_4_quiz_5").style.display = "block" 
    }
}