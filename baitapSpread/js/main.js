let jumpText = () => {
  let text = document.querySelector(".heading");
  let arrText = [...text.innerHTML];
  let content = "";
  arrText.map((item) => {
    content += `
        <span>${item}</span>
        `;
  });
  text.innerHTML = content;
};
jumpText();
