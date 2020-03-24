const msg = {
  validate: {
    selType: "Please select a rectangle or artboard.",
    selDim: "Please select a square rectangle or artboard."
  },
  opInfo: {
    success: "Favicons saved in",
    clipboard: "HTML tags copied to clipboard.",
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
  if (element.dataset.timeout === true) return;

  element.textContent = "";
  element.className = "hide";
};

const showMessage = (element, options) => {
  element.textContent = options.message;
  element.className = `show ${options.styleClass}`;

  if (options.withTimeout) {
    element.dataset.timeout = true;
    initTimeout(element);
  }
};

const initTimeout = element => {
  setTimeout(() => {
    element.dataset.timeout = false;
    resetMessage(element);
  }, 4000);
};

module.exports = {
  msg,
  styleClass,
  resetMessage,
  showMessage
};
