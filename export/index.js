const { exportRenditions } = require("./renditions");
const { exportMarkup } = require("./markup");
const { msg, showMessage } = require("../ui/message");

const handleExports = async () => {
  const renditionMsgOpts = await exportRenditions();

  //// Outcomes
  if (renditionMsgOpts.message === msg.opInfo.folderPickerCancel) {
    // Cancel
    return;
  } else if (renditionMsgOpts.message === msg.opInfo.error) {
    // Error
    showMessage(renditionMsgOpts);
  } else if (renditionMsgOpts.message === msg.opInfo.success) {
    // Success
    const markupResOpts = exportMarkup();
    renditionMsgOpts.message += ` ${markupResOpts.message}`;
    showMessage(renditionMsgOpts);
  }
};

module.exports = {
  handleExports
};
