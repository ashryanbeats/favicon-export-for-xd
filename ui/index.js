const { markup } = require("./markup");
const { handleExports } = require("../export/index");
const { renditionSizes } = require("../export/renditions");
const application = require("application");

let panel;

const attachUI = event => {
  if (panel) return panel;

  panel = document.createElement("div");
  panel.id = "panel";
  panel.innerHTML = markup;

  attachExportLists();
  panel
    .querySelector("form")
    .addEventListener("submit", () => application.editDocument(handleExports));

  event.node.appendChild(panel);
  return panel;
};

const attachExportLists = () => {
  Object.values(renditionSizes).map(platform => {
    const platformDiv = attachContainer(platform);
    attachSizeList(platform, platformDiv);
  });
};

const attachContainer = platform => {
  const sizeListDiv = panel.querySelector("#size-list");
  const platformDiv = document.createElement("div");
  const platformHeading = document.createElement("h3");
  platformDiv.id = platform.platformName;
  platformDiv.className = "platform";
  platformHeading.textContent = platform.platformName;
  platformDiv.appendChild(platformHeading);
  sizeListDiv.appendChild(platformDiv);

  return platformDiv;
};

const attachSizeList = (platform, platformDiv) => {
  platform.sizes.map(size => {
    const sizeItem = document.createElement("div");
    sizeItem.textContent = `・${size}px`;
    sizeItem.className = "size-item";
    platformDiv.appendChild(sizeItem);
  });
};

module.exports = {
  attachUI
};
