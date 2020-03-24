const { exportRenditions } = require("./renditions");
const { exportMarkup } = require("./markup");

const handleExports = async () => {
  const renditionRes = await exportRenditions();
  const markupRes = exportMarkup();
  // display result
};

module.exports = {
  handleExports
};
