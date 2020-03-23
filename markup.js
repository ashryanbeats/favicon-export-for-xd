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
  #message {
    margin: 10px 0px;
    padding: 12px;
  }
  .info {
    color: #00529B;
    background-color: #BDE5F8;
  }
  .success {
    color: #4F8A10;
    background-color: #DFF2BF;
  }
  .warning {
    color: #9F6000;
    background-color: #FEEFB3;
  }
  .error {
    color: #D8000C;
    background-color: #FFD2D2;
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
