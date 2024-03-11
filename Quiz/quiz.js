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

    if (svar1.checked == false)
     { 
        if (svar2.checked == false) {
            if (svar3.checked == false) {
                if (svar4.checked == false) {alert("ALLE ER FEIL DIN JWL FJOMP")}
                else {alert("1/4🤨")}
            }
            else if (svar4.checked == false) {alert("1/4")}
            else {2/4}

        }
        else if (svar3.checked == false) {
            if (svar4.checked == false) {alert("1/4")}
            else { alert("2/4")}

        }
        else if (svar4.checked == false) {alert("2/4")}
        else {alert("3/4")}
      }

      if (svar2.checked == false) 
      {
        
      }


      else if (svar2.checked == false) {}
      else if (svar3.checked ==false) {alert("ingen riktige")} 
      else {svar4.checked ==false}

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

                            if(opponent != 19) {
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
                        alert("5 spørsmål er feil")
                        let tapPenger = money * 0.10
                        money = money * 0.90
                        showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
                        localStorage.setItem("money", money);}

                
                } else {
                    alert("4 spørsmål er feil")

                    let tapPenger = money * 0.10
                    money = money * 0.90
                    showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
                    localStorage.setItem("money", money);
                }
            } else {
                alert("3 spørsmål er feil")

                let tapPenger = money * 0.10
                money = money * 0.90
                showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
                localStorage.setItem("money", money);
            }
        } else {

            let tapPenger = money * 0.10
            money = money * 0.90
            showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
            localStorage.setItem("money", money);
        }
    } else {   

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


// query selector returnerer FØRSTE treffet - denne skal ha display flex
const sporsmaal = document.querySelector("#quiz_container > div")
sporsmaal.style.display = "flex"


function neste() {

    if (document.getElementById("div_1_quiz_5").style.display == "flex") {
        document.getElementById("div_1_quiz_5").style.display = "none"
        document.getElementById("div_2_quiz_5").style.display = "flex"
    } else if (document.getElementById("div_2_quiz_5").style.display == "flex") {
        document.getElementById("div_2_quiz_5").style.display = "none"
        document.getElementById("div_3_quiz_5").style.display = "flex"
    } else if (document.getElementById("div_3_quiz_5").style.display == "flex") {
        document.getElementById("div_3_quiz_5").style.display = "none"
        document.getElementById("div_4_quiz_5").style.display = "flex" 
        document.getElementById("for_slutt").style.display = "none"
    }
}

function tilbake() {
    document.getElementById("for_slutt").style.display = "block"
    document.getElementById("div_1_quiz_5").style.display = "flex"
    document.getElementById("div_2_quiz_5").style.display = "none"
    document.getElementById("div_3_quiz_5").style.display = "none"
    document.getElementById("div_4_quiz_5").style.display = "none"
    
}