const { isValidSelection } = require("./validate");
const { getMarkup } = require("./markup");
const { exportRenditions } = require("./export");
let panel;

function createUI() {
  const markup = getMarkup();

  panel = document.createElement("div");
  panel.innerHTML = markup;
  panel.querySelector("form").addEventListener("submit", exportRenditions);

  return panel;
}

function show(event) {
  if (!panel) event.node.appendChild(createUI());
}

function update() {
  if (!isValidSelection()) return;
}

module.exports = {
  panels: {
    faviconExport: {
      show,
      update
    }
  }
};
