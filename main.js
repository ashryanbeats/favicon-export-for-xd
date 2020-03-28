const { attachUI } = require("./ui/index");
const { validateSelection } = require("./ui/validate");

let uiMounted = false;

async function show(event) {
  uiMounted = await attachUI(event);
  return await update();
}

async function update() {
  if (uiMounted) return validateSelection();
}

module.exports = {
  panels: {
    faviconExport: {
      show,
      update
    }
  }
};
