let main = document.createElement("div");
main.classList.add("main");
let mainImg = document.createElement("div");
mainImg.classList.add("img");
let mainGrid = document.createElement("div");
mainGrid.classList.add("gridBox");

let imgText1 = document.createElement("h1");
imgText1.classList.add("h1");
let imgText2 = document.createElement("p");
imgText2.classList.add("p");
let imgText3 = document.createElement("h5");
imgText3.classList.add("h5");
imgText1.textContent = "Key Features";
imgText2.textContent = `Sample text. Click to select the box. Click again or double click to start editing the text`;

imgText3.textContent = "image from Freepik";

function getBox(color1, image, image2, txt) {
  let box = document.createElement("div");
  box.style.backgroundColor = `${color1}`;
  box.classList.add("box");
  let img = document.createElement("div");
  img.classList.add("imgC");
  let imgLogo = document.createElement("i");
  img.append(imgLogo);
  imgLogo.classList.add(image, image2);
  let h2 = document.createElement("h2");
  h2.classList.add("title");
  h2.textContent = `${txt}`;
  let p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel tempore exercitationem ex et voluptatem maxime? Magnam alias beatae molestias.";
  let h4 = document.createElement("h4");
  h4.textContent = "learn more";
  h4.classList.add("text");
  box.append(img, img, h2, p, h4);
  mainGrid.append(box);
}
getBox("#bdb285", "fa-regular", "fa-credit-card", "pricing");
getBox("#4f6155", "fa-solid", "fa-briefcase", "about us");
getBox("#bdb285", "fa-solid", "fa-rocket", "effective");
getBox("#4f6155", "fa-solid", "fa-map", "strategy");
getBox("#4f6155", "fa-solid", "fa-trophy", "awards");
getBox("#bdb285", "fa-solid", "fa-microchip", "technology");
getBox("#4f6155", "fa-solid", "fa-people-group", "marketing");
getBox("#bdb285", "fa-solid", "fa-headset", "support");
mainImg.append(imgText1, imgText2, imgText3);

main.append(mainImg, mainGrid);
document.body.append(main);
