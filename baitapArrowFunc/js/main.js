const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let colorButton = () => {
  let buttons = "";
  colorList.map((color, index) => {
    if (index == 0) {
      buttons += `
        <button class = "color-button ${color} active" onclick = "colorHouse('${color}')"></button>
        `;
    } else {
      buttons += `
        <button class = "color-button ${color}" onclick = "colorHouse('${color}')"></button>
        `;
    }
  });
  document.querySelector("#colorContainer").innerHTML = buttons;
};
colorButton();
let colorHouse = (color) => {
  document.querySelector("#house").className = `house ${color}`;
  document.querySelector(".active").classList.remove("active");
  document.querySelector(".color-button" + `.${color}`).classList.add('active');
};
