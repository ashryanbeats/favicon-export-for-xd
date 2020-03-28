const { handleExports } = require("../export/index");
const { renditionSizes } = require("../export/renditions");
const application = require("application");
const fs = require("uxp").storage.localFileSystem;

let panel;

const attachUI = async event => {
  if (panel) return true;

  const markup = await getMarkup();
  panel = document.createElement("div");
  panel.id = "panel";
  panel.innerHTML = markup;

  attachExportLists();
  panel
    .querySelector("form")
    .addEventListener("submit", () => application.editDocument(handleExports));

  event.node.appendChild(panel);
  return true;
};

const getMarkup = async () => {
  const pluginFolder = await fs.getPluginFolder();
  const pluginFolderEntries = await pluginFolder.getEntries();

  const uiFolder = pluginFolderEntries.filter(entry => entry.name === "ui")[0];
  const uiFolderEntries = await uiFolder.getEntries();

  const markupFile = uiFolderEntries.filter(
    entry => entry.name === "markup.html"
  )[0];
  const markupFileContents = await markupFile.read();

  return markupFileContents;
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
