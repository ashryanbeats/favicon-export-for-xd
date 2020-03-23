const { selection, Rectangle, Artboard } = require("scenegraph");

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
  const warningEl = document.querySelector("#warning");
  resetWarning(warningEl);

  // selection exists?
  if (!selectionExists()) return showWarning(warningEl, validationMsg.selType);

  const item = selection.items[0];

  // is correct type?
  if (!isCorrectType(item))
    return showWarning(warningEl, validationMsg.selType);

  // is square?
  if (!isSquare(item)) return showWarning(warningEl, validationMsg.selDim);

  return true;
};

const validationMsg = {
  selType: "Please select a rectangle or artboard.",
  selDim: "Please select a square rectangle or artboard."
};

const resetWarning = element => {
  element.textContent = "";
  element.className = "hide";
};

const showWarning = (element, message) => {
  element.textContent = message;
  element.className = "show";
  return false;
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
