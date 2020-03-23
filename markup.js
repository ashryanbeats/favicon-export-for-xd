const getMarkup = () => {
  return markup;
};

const markup = `
<style>
  .break {
    lex-wrap: wrap;
  }
  label.row > span {
    color: #8E8E8E;
    width: 20px;
    text-align: right;
    font-size: 9px;
  }
  label.row input {
    flex: 1 1 auto;
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  .warning {
    background: yellow;
  }
  .info {
    background: blue;
  }
  .error {
    background: red;
  }
  .size-item {
    padding-left: 10px;
    padding-top: 5px;
  }
</style>
<form method="dialog">
  <div id="export-info">
    <h2>Export sizes</h2>
    <div id="size-list"></div>
  </div>
  <footer>
    <button id="ok" type="submit" uxp-variant="cta">Export Favicons</button>
  </footer>
</form>
<div id="message"></div>
`;

module.exports = {
  getMarkup
};
