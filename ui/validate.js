const { selection, Rectangle, Artboard } = require("scenegraph");
const { msg, styleClass, showMessage, resetMessage } = require("./message");

const validateSelection = () => {
  const panel = document.querySelector("#panel");
  const okButton = panel.querySelector("#ok");

  if (!isValidSelection()) {
    okButton.setAttribute("disabled", "");
  } else {
    okButton.removeAttribute("disabled");
  }
};

const isValidSelection = () => {
  resetMessage();

  // selection exists?
  if (!selectionExists())
    return showMessage({
      message: msg.validate.selType,
      styleClass: styleClass.warning
    });

  const item = selection.items[0];

  // is correct type?
  if (!isCorrectType(item))
    return showMessage({
      message: msg.validate.selType,
      styleClass: styleClass.warning
    });

  // is square?
  if (!isSquare(item))
    return showMessage({
      message: msg.validate.selDim,
      styleClass: styleClass.warning
    });

  return true;
};

const selectionExists = () => {
  return !!selection.items.length;
};

const isCorrectType = item => {
  const supportedTypes = [Rectangle, Artboard];
  const typeValidations = supportedTypes.map(nodeType => {
    return item instanceof nodeType;
  });

  return typeValidations.includes(true);
};

const isSquare = item => {
  return item.width === item.height;
};

module.exports = { validateSelection };
