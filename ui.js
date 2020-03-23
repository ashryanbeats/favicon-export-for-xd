const { getMarkup } = require("./markup");
const { exportRenditions, renditionSizes } = require("./export");

let panel;

const attachUI = event => {
  if (panel) return panel;

  const markup = getMarkup();
  panel = document.createElement("div");
  panel.id = "panel";
  panel.innerHTML = markup;

  attachSizeList();
  panel.querySelector("form").addEventListener("submit", exportRenditions);

  event.node.appendChild(panel);
  return panel;
};

const attachSizeList = () => {
  const sizeListDiv = panel.querySelector("#size-list");

  renditionSizes.map(size => {
    const sizeItem = document.createElement("div");
    sizeItem.textContent = `・${size}px`;
    sizeItem.className = "size-item";
    sizeListDiv.appendChild(sizeItem);
  });
};

module.exports = {
  attachUI
};
