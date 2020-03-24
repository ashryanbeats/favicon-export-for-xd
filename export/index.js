const { exportRenditions } = require("./renditions");
const { exportMarkup } = require("./markup");

const handleExports = async () => {
  await exportRenditions();
  exportMarkup();
};

module.exports = {
  handleExports
};
