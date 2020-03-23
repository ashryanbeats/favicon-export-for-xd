const { exportRenditions } = require("./renditions");

const handleExports = async () => {
  await exportRenditions();
};

module.exports = {
  handleExports
};
