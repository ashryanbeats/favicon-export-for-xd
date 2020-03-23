const msg = {
  validate: {
    selType: "Please select a rectangle or artboard.",
    selDim: "Please select a square rectangle or artboard."
  },
  opInfo: {
    success: "Favicons saved in",
    error: "An error occurred. Please try again."
  }
};

const styleClass = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
};

const resetMessage = element => {
  element.textContent = "";
  element.className = "hide";
};

const showMessage = (element, options) => {
  element.textContent = options.message;
  element.className = `show ${options.styleClass}`;
  if (options.withTimeout) initTimeout(element);
  return false;
};

const initTimeout = element => {
  setTimeout(() => {
    resetMessage(element);
  }, 4000);
};

module.exports = {
  msg,
  styleClass,
  resetMessage,
  showMessage
};
