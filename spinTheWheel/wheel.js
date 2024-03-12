// Npc greier


const npcDialog = document.getElementById("npc-dialog");
const npcMessage = document.getElementById("npc-message");
const npcYesBtn = document.getElementById("npc-yes");
const npcNoBtn = document.getElementById("npc-no");

npc.addEventListener("click", () => {
  showNPCDialog("Hi there! Would you like to talk?");
});

function showNPCDialog(message) {
  console.log("showNPCDialog called");

  npcMessage.textContent = message;
  npcDialog.style.display = "block";
  npcYesBtn.style.display = "block";
  npcNoBtn.style.display = "block";

  npcYesBtn.textContent = "Yes";
  npcNoBtn.textContent = "No";

  console.log("showNPCDialog completed");
}

function hideNPCDialog() {
  console.log("hideNPCDialog called");

  setTimeout(function () {
    npcDialog.style.display = "none";
    npcYesBtn.style.display = "none";
    npcNoBtn.style.display = "none";

    console.log("hideNPCDialog completed");
  }, 1);
}

function handleNPCResponse(response) {
  console.log("handleNPCResponse triggered with response:", response);

  if (response) {
    console.log("Player said 'Yes'");
    hideNPCDialog();

    setTimeout(function () {
      showNPCDialog("Great! Would you like to spin the wheel to get a random skin for 1000 money?");
      npcYesBtn.textContent = "Sure";
      npcNoBtn.textContent = "Decline";

      npcYesBtn.addEventListener("click", handlePurchase);
    }, 2);
  } else {
    console.log("Player said 'No'");
    hideNPCDialog();
  }
}

npcNoBtn.addEventListener("click", () => {
  hideNPCDialog();
});

function handlePurchase() {
  console.log("Player wants to purchase");
  hideNPCDialog();

  setTimeout(function () {
    showNPCDialog("Great! Please confirm your purchase.");

    npcYesBtn.textContent = "Confirm";
    npcNoBtn.textContent = "Cancel";

    npcYesBtn.addEventListener("click", buyRandomSkin);
  }, 2);
}

let spinning = false;
const cost = 1000;

function buyRandomSkin() {
  console.log("kjører funksjonen")
  if (!spinning && money >= cost) {
    console.log("nok penger og ikke spinner")
    money -= cost;
    spinning = true;
    spinWheel();
  } else if (money >= cost) {
    showAlert("Vent til forrige spin er ferdig", "error")
  } else {
    showAlert("Ikke nok penger til å spinne skin wheel", "error");
    spillAvError();
  }
}

function spinWheel() {
  const spinner = document.getElementById('skinWheel');
  console.log("Spinning wheel...");

  spinner.classList.add('visible');

  const arrow = document.createElement('div');
  arrow.classList.add('arrow-down');
  document.body.appendChild(arrow);

  const randomDegree = 360 * (Math.random() * 5 + 1);
  console.log("Random degree:", randomDegree);

  const rotateValue = `rotate(${randomDegree}deg)`;
  console.log("Rotate value:", rotateValue);

  
  spinner.style.transform = rotateValue;

  let styleElement = document.getElementById('spinKeyframes');

  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'spinKeyframes';
    document.head.appendChild(styleElement);
  }

  styleElement.innerHTML = `
      @keyframes spin {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: ${rotateValue};
          }
      }
  `;

  spinner.style.animation = 'none';

  spinner.style.animation = 'spin 3s ease-in-out';

  setTimeout(() => {
    console.log("Spinning complete!");
    checkResult(randomDegree % 360);
    setTimeout(() => {
      hideWheel();
      spinning = false;
    }, 500);
  }, 3000); 
}

let gotPeter = 0;
let gotPanda = 0;
let gotMonke = 0;
let gotLangbein = 0;

function checkResult(angle) {
  console.log("Checking result for angle:", angle);
  const sectionSize = 18;

  if (angle <= sectionSize) {
    showAlert("Congratulations! You landed on Section 1, langbein", "success");
    if (gotLangbein == 10) {
      money += 1000;
      showAlert("You got back 1000 money since you already have Langbein", "success")
    } else {
      gotLangbein = 10;
    }
  } else if (angle <= 4 * sectionSize) {
    showAlert("Congratulations! You landed on Section 2, monke", "success");
    if (gotMonke == 10) {
      money += 500;
      showAlert("You got back 500 money since you already have Monke", "success")
    } else {
      gotMonke = 10;
    }
  } else if (angle <= 10 * sectionSize) {
    showAlert("Congratulations! You landed on Section 3, panda", "success");
    if (gotPanda == 10) {
      money += 250;
      showAlert("You got back 250 money since you already have Panda", "success")
    } else {
      gotPanda = 10;
    }
  } else {
    showAlert("Congratulations! You landed on Section 4, peter", "success");
    if (gotPeter == 10) {
      money += 100;
      showAlert("You got back 100 money since you already have Peter", "success")
    } else {
      gotPeter = 10;
    }
  }
  setTimeout(() => {
    console.log("Spinning complete!");
    showObtainedSkin(); // Show the obtained skin modal
    spinning = false;
  }, 3000);
}

function hideWheel() {
  const spinner = document.getElementById('skinWheel');
  spinner.classList.remove('visible'); 
  spinner.style.animation = ''; 
  const arrow = document.querySelector('.arrow-down');
  if (arrow) {
      arrow.remove();
  }
}

function showObtainedSkin() {
  const modal = document.getElementById('skinModal');
  const obtainedSkinImage = document.getElementById('obtainedSkinImage');

  let skinImage;

  // Logic to determine which skin image to display based on the result
  if (angle <= sectionSize) {
    skinImage = 'angel.jpeg';
  } else if (angle <= 4 * sectionSize) {
    skinImage = 'monke.jpeg';
  } else if (angle <= 10 * sectionSize) {
    skinImage = 'panda.png';
  } else {
    skinImage = 'peter.png';
  }

  obtainedSkinImage.src = `../Bilder/${skinImage}`;
  modal.style.display = 'block';
}