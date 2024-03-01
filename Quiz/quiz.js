let money = 0
money = parseInt(localStorage.getItem("money")) || 0

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
                    localStorage.setItem("quiz1Seier", quiz1Seier)
                    window.location.href = '../Index.html';
                } else {
                    alert("wrong")

                    let tapPenger = money * 0.10
                    money = money * 0.90
                    showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
                    localStorage.setItem("money", money);
                }
            } else {
                alert("wrong")

                let tapPenger = money * 0.10
                money = money * 0.90
                showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
                localStorage.setItem("money", money);
            }
        } else {
            alert("wrong")

            let tapPenger = money * 0.10
            money = money * 0.90
            showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
            localStorage.setItem("money", money);
        }
    } else {
        alert("wrong ")

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