const { exportRenditions } = require("./renditions");
const { exportMarkup } = require("./markup");
const { msg, showMessage } = require("../ui/message");

const handleExports = async () => {
  const renditionMsgOpts = await exportRenditions();

  if (renditionMsgOpts.message !== msg.opInfo.error) {
    const markupResOpts = exportMarkup();
    renditionMsgOpts.message += ` ${markupResOpts.message}`;
  }

  showMessage(renditionMsgOpts);
};

module.exports = {
  handleExports
};
