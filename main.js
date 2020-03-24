const { attachUI } = require("./ui/index");
const { validateSelection } = require("./ui/validate");

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
