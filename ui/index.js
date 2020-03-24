const { getMarkup } = require("./markup");
const { handleExports } = require("../export/index");
const { renditionSizes } = require("../export/renditions");
const application = require("application");

let panel;

const attachUI = event => {
  if (panel) return panel;

  const markup = getMarkup();
  panel = document.createElement("div");
  panel.id = "panel";
  panel.innerHTML = markup;

  attachSizeList();
  panel
    .querySelector("form")
    .addEventListener("submit", () => application.editDocument(handleExports));

  event.node.appendChild(panel);
  return panel;
};

const attachSizeList = () => {
  const sizeListDiv = panel.querySelector("#size-list");

  console.log(renditionSizes);

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
