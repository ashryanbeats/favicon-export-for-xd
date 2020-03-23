const { attachUI } = require("./ui");
const { validateSelection } = require("./validate");

function show(event) {
  return attachUI(event);
}

function update() {
  return validateSelection();
}

module.exports = {
  panels: {
    faviconExport: {
      show,
      update
    }
  }
};
