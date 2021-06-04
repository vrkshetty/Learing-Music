myListLen = myList.length;

for (var i = 0; i < myListLen; i++) {
  varase = myList[i].varase;
  raaganum = myList[i].Number;
  raagaText = myList[i].Text;
  raagaAudio = myList[i].audoSrc;

  mainDiv = document.createElement("div");
  document.body.appendChild(mainDiv);
  mainDiv.className = "container";

  if (myList[i].varase != undefined) {
    h1Text = document.createElement("h1");
    h1Text.innerText = varase;
    mainDiv.appendChild(h1Text);
    h1Text.className = "varas";
  }

  h2Text = document.createElement("h2");
  h2Text.innerText = raaganum;
  mainDiv.appendChild(h2Text);
  h2Text.className = "raagaNumber";

  para = document.createElement("p");
  para.innerHTML = raagaText;
  para.className = "para_text";
  mainDiv.appendChild(para);

  audio = document.createElement("AUDIO");
  audio.setAttribute("controls", "src");
  audio.setAttribute("src", raagaAudio);
  audio.setAttribute("controlsList", "nodownload");
  audio.className = "audio";
  mainDiv.appendChild(audio);
}

window.addEventListener("load", function () {
  setTimeout(function () {
    //     // This hides the address bar:
    window.scrollTo(0, 1);
  }, 0);
});

// //original//
// // for (var i = 0; i < myListLen; i++) {
// //   slokaTittle = myList[i].Tittle;
// //   slokaParaText = myList[i].Text;
// //   slokaAudoSrc = myList[i].audoSrc;
// //   newDiv = document.createElement("div");
// //   childDiv = document.createElement("div");
// //   newDiv.id = "container";
// //   newDiv.className = "chapter";
// //   h2Text = document.createElement("h2");
// //   h2Text.innerText = slokaTittle;
// //   audio = document.createElement("AUDIO");
// //   audio.setAttribute("controls", "src");
// //   audio.setAttribute("src", slokaAudoSrc);
// //   audio.setAttribute("controlsList", "nodownload");
// //   newDiv.appendChild(h2Text);
// //   childDiv.innerHTML = slokaParaText;
// //   newDiv.appendChild(childDiv);
// //   newDiv.appendChild(audio);
// //   document.body.appendChild(newDiv);
// // }
